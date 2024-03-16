import { call, delay, put, takeLatest } from "redux-saga/effects";
import dudesApi from "../../../services/dudesApi/index";
import { fetchCategories, fetchCategoriesFailure, fetchCategoriesSuccess } from ".";

function* fetchAllCategories() {
    try {
        const API = dudesApi.getInstance().api;
        for (let i = 0; i < 5; i++) {
        try {
            const response = yield call(API.fetchCategories);
            if (response.ok) {
            yield put(fetchCategoriesSuccess(response.data));
            break;
            } else if (i >= 4) {
            yield put(fetchCategoriesFailure(response.problem));
            } else {
                yield delay(1000);
            }
        } catch (e) {
            yield put(fetchCategoriesFailure(e.message));
        }
        }
    } catch (e) {
        yield put(fetchCategoriesFailure(e.message));
    }
    }

function* categoriesSaga() {
    yield takeLatest(fetchCategories.type, fetchAllCategories);
}

export default categoriesSaga;
