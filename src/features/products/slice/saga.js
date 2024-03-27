import { call, delay, put, takeLatest, all, select, takeEvery } from "redux-saga/effects";
import { toast } from 'react-toastify';
import dudesApi from "../../../services/dudesApi/index";
import {
  fetchProducts,
  fetchProductsFailure,
  fetchProductsSuccess,
  fetchProduct,
  fetchProductSuccess,
  fetchProductFailure,
  addProduct,
  addProductSuccess,
  addProductFailure,
} from ".";
import { selectSelectedItem } from "./selectors";
import { selectToken } from "../../antiforgery/slice/selectors";
import KeycloakApiManager from "../../../services/keycloak";

function* fetchAllProducts() {
  try {
    const API = dudesApi.getInstance().api;
    API.setHeader("Content-Type", "application/json");
    for (let i = 0; i < 5; i++) {
      try {
        const response = yield call(API.fetchProducts);
        if (response.ok) {
          yield put(fetchProductsSuccess(response.data));
          yield toast.success("Products fetched successfully");
          break;
        } else if (i >= 4) {
          yield put(fetchProductsFailure(response.problem));
          yield toast.error("Failed to fetch products");
        } else {
          yield delay(1000);
        }
      } catch (e) {
        yield put(fetchProductsFailure(e.message));
        yield toast.error("Failed to fetch products");
      }
    }
  } catch (e) {
    yield put(fetchProductsFailure(e.message));
    yield toast.error("Failed to fetch products");
  }
}

function* fetchSingleProduct() {
  const selectedItem = yield select(selectSelectedItem);
  if (selectedItem) {
    try {
      const API = dudesApi.getInstance().api;
      API.setHeader("Content-Type", "application/json");
      for (let i = 0; i < 5; i++) {
        try {
          const response = yield call(API.fetchProduct, selectedItem.id);
          if (response.ok) {
            yield put(fetchProductSuccess(response.data));
            yield toast.success("Product fetched successfully");
            break;
          } else if (i >= 4) {
            yield put(fetchProductFailure(response.problem));
            yield toast.error("Failed to fetch product");
          } else {
            yield delay(1000);
          }
        } catch (e) {
          yield put(fetchProductFailure(e.message));
          yield toast.error("Failed to fetch product");
        }
      }
    } catch (e) {
      yield put(fetchProductFailure(e.message));
      yield toast.error("Failed to fetch product");
    }
  } else {
    yield put(fetchProductFailure("No selected item"));
    yield toast.error("No selected item");
  }
}

function* addNewProduct(e, action) {
  try {
    const API = dudesApi.getInstance().api;
    const keycloak = KeycloakApiManager.getInstance().keycloak;
    const antiforgeryToken = yield select(selectToken);
    // eslint-disable-next-line no-unused-vars
    const authToken = yield call(keycloak.updateToken);
    API.setHeader("Authorization", `Bearer ${keycloak.token}`);
    API.setHeader("Content-Type", "multipart/form-data");
    API.setHeader("X-XSRF-TOKEN", antiforgeryToken);
    for (let i = 0; i < 5; i++) {
      try {
        const response = yield call(API.createProduct, action.payload);
        if (response.ok) {
          yield put(addProductSuccess(response.data));
          yield toast.success("Product added successfully");
          break;
        } else if (i >= 4) {
          yield put(addProductFailure(response.problem));
          yield toast.error("Failed to add product");
          break;
        } else {
          yield delay(1000);
        }
      } catch (e) {
        yield put(addProductFailure(e.message));
        yield toast.error("Failed to add product");
      }
    }
  } catch (e) {
    console.log(e);
    yield put(addProductFailure(e.message));
    yield toast.error("Failed to add product");
  }
}

function* productsSaga(payload) {
  yield all([
    yield takeLatest(fetchProducts.type, fetchAllProducts),
    yield takeLatest(fetchProduct.type, fetchSingleProduct),
    yield takeEvery(addProduct.type, addNewProduct, payload),
  ]);
}

export default productsSaga;
