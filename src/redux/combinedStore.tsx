import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { homeReducer, HomeState } from "./HomeReducer";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export interface CombineState {
  homeReducer: HomeState;
} // to allow other components to use

const combine = combineReducers({ homeReducer });
const middleware = [sagaMiddleware, logger];

export const createStore = () => {
  const store = configureStore({
    reducer: combine,
    middleware,
  });
  sagaMiddleware.run(rootSaga);
  return store;
};
