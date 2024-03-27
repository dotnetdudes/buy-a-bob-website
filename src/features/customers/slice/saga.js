import { call, delay, put, takeLatest } from "redux-saga/effects";
import dudesApi from "../../../services/dudesApi/index";
import { fetchCustomers, fetchCustomersFailure, fetchCustomersSuccess } from ".";

function* fetchAllCustomers() {
    try {
        const API = dudesApi.getInstance().api;
        API.setHeader("Content-Type", "application/json");
        for (let i = 0; i < 5; i++) {
        try {
            const response = yield call(API.fetchCustomers);
            if (response.ok) {
            yield put(fetchCustomersSuccess(response.data));
            break;
            } else if (i >= 4) {
            yield put(fetchCustomersFailure(response.problem));
            } else {
                yield delay(1000);
            }
        } catch (e) {
            yield put(fetchCustomersFailure(e.message));
        }
        }
    } catch (e) {
        yield put(fetchCustomersFailure(e.message));
    }
    }

function* customersSaga() {
    yield takeLatest(fetchCustomers.type, fetchAllCustomers);
}

export default customersSaga;
