import { all } from "redux-saga/effects";

import { HomeSagas } from "./HomeReducer";

export default function* rootSaga() {
  yield all([HomeSagas()]);
}
// yield = return
//all([...]) =activate all sagas in the array
