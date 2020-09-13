import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { promiseMiddleware } from "@adobe/redux-saga-promise";

import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActionPaths: ["meta.promise"],
    },
  }).concat([promiseMiddleware, sagaMiddleware]),
});

sagaMiddleware.run(rootSaga);
