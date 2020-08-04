import { all, fork } from "redux-saga/effects";

import homeSaga from "./HomeReducer";

export default function* rootSaga() {
  yield all([fork(homeSaga)]);
}
