import { createSlice } from "@reduxjs/toolkit";
import { createPromiseAction } from "@adobe/redux-saga-promise";

const prefix = "auth";

export const promiseActions = {
  signup: createPromiseAction(`${prefix}/SIGNUP`),
  signupConfirm: createPromiseAction(`${prefix}/SIGNUP_CONFIRM`),
};

const setCurrentUser = (state, { payload }) => {
  state.currentUser = payload;
};

export const { actions, reducer } = createSlice({
  name: prefix,
  initialState: {},
  extraReducers: {
    [promiseActions.signupConfirm.resolved]: setCurrentUser,
  },
});
