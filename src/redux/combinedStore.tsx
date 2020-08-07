import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { homeReducer, HomeState } from "./HomeReducer";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";

export interface CombineState {
  homeReducer: HomeState;
} // to allow other components to use

const combine = combineReducers({ homeReducer });
const middleware = [logger, ReduxThunk];

export const createStore = () => {
  const store = configureStore({
    reducer: combine,
    middleware,
  });
  return store;
};

// ?middleware concept
//1. when action is dispatched,
//2. go through middleware
//3. if these middleware doen't return next(action) => actions are not delivered to reducer(do nothing further)
//4. redux-thunk : can react to "function structure" action
