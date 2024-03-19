import { call, delay, put, takeLatest } from "redux-saga/effects";
import dudesApi from "../../../services/dudesApi/index";
import { fetchToken, fetchTokenSuccess, fetchTokenFailure } from ".";
import KeycloakApiManager from "../../../services/keycloak";

function* fetchAntiForgeryToken() {
  try {
    console.log("Fetching token in sga");
    const API = dudesApi.getInstance().api;
    const keycloak = KeycloakApiManager.getInstance().keycloak;
    const authToken = yield call(keycloak.updateToken);
    console.log("Fetching token in sga");
    console.log(authToken);
    API.setHeader("Authorization", `Bearer ${keycloak.token}`);
    for (let i = 0; i < 5; i++) {
      try {
        const response = yield call(API.fetchAntiForgeryToken);
        if (response.ok) {
          console.log(response.data);
          yield put(fetchTokenSuccess(response.data));
          break;
        } else if (i >= 4) {
          yield put(fetchTokenFailure(response.problem));
        } else {
          yield delay(1000);
        }
      } catch (e) {
        console.log(e);
        yield put(fetchTokenFailure(e));
      }
    }
  } catch (e) {
    console.log(e);
    // yield put(fetchTokenFailure(e));
  }
}

function* antiforgerySaga() {
  yield takeLatest(fetchToken.type, fetchAntiForgeryToken);
}

export default antiforgerySaga;
