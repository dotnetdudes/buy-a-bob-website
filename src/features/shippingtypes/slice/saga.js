import { call, delay, put, takeLatest } from "redux-saga/effects";
import dudesApi from "../../../services/dudesApi/index";
import { fetchShippingTypes, fetchShippingTypesFailure, fetchShippingTypesSuccess } from ".";

function* fetchAllShippingTypes() {
    try {
        const API = dudesApi.getInstance().api;
        API.setHeader("Content-Type", "application/json");
        for (let i = 0; i < 5; i++) {
        try {
            const response = yield call(API.fetchShippingTypes);
            if (response.ok) {
            yield put(fetchShippingTypesSuccess(response.data));
            break;
            } else if (i >= 4) {
            yield put(fetchShippingTypesFailure(response.problem));
            } else {
                yield delay(1000);
            }
        } catch (e) {
            yield put(fetchShippingTypesFailure(e.message));
        }
        }
    } catch (e) {
        yield put(fetchShippingTypesFailure(e.message));
    }
    }

function* shippingTypesSaga() {
    yield takeLatest(fetchShippingTypes.type, fetchAllShippingTypes);
}

export default shippingTypesSaga;
