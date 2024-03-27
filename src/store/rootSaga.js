import { all, spawn, call } from "redux-saga/effects";
import productsSaga from "../features/products/slice/saga";
import addressesSaga from "../features/addresses/slice/saga";
import tagSaga from "../features/tags/slice/saga";
import statusSaga from "../features/status/slice/saga";
import categoriesSaga from "../features/categories/slice/saga";
import shippingTypesSaga from "../features/shippingtypes/slice/saga";
import cartsSaga from "../features/carts/slice/saga";
import antiforgerySaga from "../features/antiforgery/slice/saga";

function* rootSaga() {
  const sagas = [
    addressesSaga,
    antiforgerySaga,
    cartsSaga,
    categoriesSaga,
    productsSaga,
    shippingTypesSaga,
    statusSaga,
    tagSaga,
  ];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}

export default rootSaga;
