import { call, delay, put, takeLatest } from "redux-saga/effects";
import dudesApi from "../../../services/dudesApi/index";
import { fetchTags, fetchTagsFailure, fetchTagsSuccess } from ".";

function* fetchAllTags() {
    try {
        const API = dudesApi.getInstance().api;
        API.setHeader("Content-Type", "application/json");
        for (let i = 0; i < 5; i++) {
        try {
            const response = yield call(API.fetchTags);
            if (response.ok) {
            yield put(fetchTagsSuccess(response.data));
            break;
            } else if (i >= 4) {
            yield put(fetchTagsFailure(response.problem));
            } else {
                yield delay(1000);
            }
        } catch (e) {
            yield put(fetchTagsFailure(e.message));
        }
        }
    } catch (e) {
        yield put(fetchTagsFailure(e.message));
    }
    }

function* tagsSaga() {
    yield takeLatest(fetchTags.type, fetchAllTags);
}

export default tagsSaga;
