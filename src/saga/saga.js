import { put, delay } from "redux-saga/effects";
import { load } from "../actions";
import { getData } from "../api";

function* sagaLoad(action) {
  yield put(load.start());
  // In real project need to stop this using the state flag
  while (true) {
    try {
      const result = yield getData();
      if (result && result.results) {
        yield put(load.success(result.results[0]));
      } else {
        yield put(load.failed(result));
      }
    } catch (e) {
      yield put(load.failed(e.message));
    }
    yield delay(1000);
  }
}

export function* saga() {
  yield sagaLoad();
}
