import { all, spawn, call } from "redux-saga/effects";
import productsSaga from "../features/products/slice/saga";
import addressesSaga from "../features/addresses/slice/saga";

function* rootSaga() {
  const sagas = [
    productsSaga,
    addressesSaga,
    //saga3,
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
