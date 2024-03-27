import { call, delay, put, takeLatest } from "redux-saga/effects";
import dudesApi from "../../../services/dudesApi/index";
import { fetchAddresses, fetchAddressesFailure, fetchAddressesSuccess } from ".";

function* fetchAllAddresses() {
  try {
    const API = dudesApi.getInstance().api;
    API.setHeader("Content-Type", "application/json");
    for (let i = 0; i < 5; i++) {
      try {
        const response = yield call(API.fetchAddresses);
        if (response.ok) {
          yield put(fetchAddressesSuccess(response.data));
          break;
        } else if (i >= 4) {
          yield put(fetchAddressesFailure(response.problem));
        } else {
            yield delay(1000);
        }
      } catch (e) {
        yield put(fetchAddressesFailure(e.message));
      }
    }
  } catch (e) {
    yield put(fetchAddressesFailure(e.message));
  }
}

function* addressesSaga() {
  yield takeLatest(fetchAddresses.type, fetchAllAddresses);
}

export default addressesSaga;
