import { takeLatest } from "redux-saga/effects";
import {
  rejectPromiseAction,
  resolvePromiseAction,
} from "@adobe/redux-saga-promise";
import { camelizeKeys } from "humps";

import { auth } from "../../shared/services/gotrue";
import { promiseActions } from "./auth.redux";

function* signup(action) {
  try {
    const { email, password } = action.payload;
    yield auth.signup(email, password, {});

    yield resolvePromiseAction(action);
  } catch (error) {
    yield rejectPromiseAction(action, camelizeKeys(error.json));
  }
}

export function* watchAuth() {
  yield takeLatest(promiseActions.signup.trigger, signup);
}
