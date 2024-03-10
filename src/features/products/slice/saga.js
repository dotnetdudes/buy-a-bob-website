import { call, delay, put, takeLatest } from "redux-saga/effects";
import dudesApi from "../../../services/dudesApi/index";
import { fetchProducts, fetchProductsFailure, fetchProductsSuccess } from ".";

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

function* productsSaga() {
  yield takeLatest(fetchProducts.type, fetchAllProducts);
}

export default productsSaga;
