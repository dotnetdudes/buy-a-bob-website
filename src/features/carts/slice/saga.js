import { call, delay, put, takeLatest } from "redux-saga/effects";
import dudesApi from "../../../services/dudesApi/index";
import { fetchCarts, fetchCartsFailure, fetchCartsSuccess } from ".";

function* fetchAllCarts() {
    try {
        const API = dudesApi.getInstance().api;
        for (let i = 0; i < 5; i++) {
        try {
            const response = yield call(API.fetchCarts);
            if (response.ok) {
            yield put(fetchCartsSuccess(response.data));
            break;
            } else if (i >= 4) {
            yield put(fetchCartsFailure(response.problem));
            } else {
                yield delay(1000);
            }
        } catch (e) {
            yield put(fetchCartsFailure(e.message));
        }
        }
    } catch (e) {
        yield put(fetchCartsFailure(e.message));
    }
    }

function* cartsSaga() {
    yield takeLatest(fetchCarts.type, fetchAllCarts);
}

export default cartsSaga;
