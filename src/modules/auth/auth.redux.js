import { createSlice } from "@reduxjs/toolkit";
import { createPromiseAction } from "@adobe/redux-saga-promise";

const prefix = "auth";

export const promiseActions = {
  signup: createPromiseAction(`${prefix}/SIGNUP`),
};

export const { actions, reducer } = createSlice({
  initialState: {},
  name: prefix,
});
