import { call, delay, put, takeLatest } from "redux-saga/effects";
import dudesApi from "../../../services/dudesApi/index";
import { fetchStatus, fetchStatusFailure, fetchStatusSuccess } from ".";

function* fetchAllStatus() {
    try {
        const API = dudesApi.getInstance().api;
        for (let i = 0; i < 5; i++) {
        try {
            const response = yield call(API.fetchStatuses);
            if (response.ok) {
            yield put(fetchStatusSuccess(response.data));
            break;
            } else if (i >= 4) {
            yield put(fetchStatusFailure(response.problem));
            } else {
                yield delay(1000);
            }
        } catch (e) {
            yield put(fetchStatusFailure(e.message));
        }
        }
    } catch (e) {
        yield put(fetchStatusFailure(e.message));
    }
    }

function* statusSaga() {
    yield takeLatest(fetchStatus.type, fetchAllStatus);
}

export default statusSaga;
