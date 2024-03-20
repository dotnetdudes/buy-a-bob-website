import { call, delay, put, takeLatest, all, select, takeEvery } from "redux-saga/effects";
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
          break;
        } else if (i >= 4) {
          yield put(fetchProductsFailure(response.problem));
        } else {
          yield delay(1000);
        }
      } catch (e) {
        yield put(fetchProductsFailure(e.message));
      }
    }
  } catch (e) {
    yield put(fetchProductsFailure(e.message));
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
            break;
          } else if (i >= 4) {
            yield put(fetchProductFailure(response.problem));
          } else {
            yield delay(1000);
          }
        } catch (e) {
          yield put(fetchProductFailure(e.message));
        }
      }
    } catch (e) {
      yield put(fetchProductFailure(e.message));
    }
  } else {
    yield put(fetchProductFailure("No selected item"));
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
          break;
        } else if (i >= 4) {
          yield put(addProductFailure(response.problem));
          break;
        } else {
          yield delay(1000);
        }
      } catch (e) {
        yield put(addProductFailure(e.message));
      }
    }
  } catch (e) {
    yield put(addProductFailure(e.message));
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
