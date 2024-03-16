import { all, spawn, call } from "redux-saga/effects";
import productsSaga from "../features/products/slice/saga";
import addressesSaga from "../features/addresses/slice/saga";
import tagSaga from "../features/tags/slice/saga";
import statusSaga from "../features/status/slice/saga";
import categoriesSaga from "../features/categories/slice/saga";
import shippingTypesSaga from "../features/shippingtypes/slice/saga";
import cartsSaga from "../features/carts/slice/saga";

function* rootSaga() {
  const sagas = [
    productsSaga,
    addressesSaga,
    tagSaga,
    statusSaga,
    categoriesSaga,
    shippingTypesSaga,
    cartsSaga,
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
