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
import keycloak from "../../../services/keycloak";

function* fetchAllProducts() {
  try {
    const API = dudesApi.getInstance().api;
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

function* addNewProduct(action) {
  try {
    const API = dudesApi.getInstance().api;
    const antiforgeryToken = yield select(selectToken);
    const authToken = yield call(keycloak.updateToken);
    API.setHeader("Authorization", `Bearer ${authToken}`);
    API.setHeader("Content-Type", "multipart/form-data");
    API.setHeader("Accept", "application/json");
    API.setHeader("X-XRSF-TOKEN", antiforgeryToken);
    for (let i = 0; i < 5; i++) {
      try {
        const response = yield call(API.createProduct, action.payload);
        if (response.ok) {
          yield put(addProductSuccess(response.data));
          API.setHeader("Content-Type", "application/json");
          break;
        } else if (i >= 4) {
          yield put(addProductFailure(response.problem));
          API.setHeader("Content-Type", "application/json");
          break;
        } else {
          yield delay(1000);
        }
      } catch (e) {
        yield put(addProductFailure(e.message));
        API.setHeader("Content-Type", "application/json");
      }
    }
  } catch (e) {
    yield put(addProductFailure(e.message));
  }
}

function* productsSaga() {
  yield all([
    yield takeLatest(fetchProducts.type, fetchAllProducts),
    yield takeLatest(fetchProduct.type, fetchSingleProduct),
    yield takeEvery(addProduct.type, addNewProduct),
  ]);
}

export default productsSaga;
