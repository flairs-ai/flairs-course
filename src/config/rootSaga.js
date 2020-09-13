import { fork, all } from "redux-saga/effects";
import { watchAuth } from "../modules/auth/auth.sagas";

export default function* rootSaga() {
  yield all([fork(watchAuth)]);
}
