import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { homeReducer, HomeState } from "./HomeReducer";
import logger from "redux-logger";

//! How middleware works? by redux-thunk///
//? template structure
const exampleMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log(action);
  const result = next(action);
  return result;
};
const exampleMiddleware2 = (store: any) => (next: any) => (action: any) => {
  console.log("middleware2 is activated");
  const result = next(action);
  return result;
};

//? process
//1. get actionInfo in store(allows me to use dispatch, getState,.... every redux function) <--- note! action can be a function. it is a base concept of redux-thunk
//2. in the middleware array in configureStore,
//3. it is array <-- in other words, middleware is activated in order and dispatch action
//! if there is no return on next(action) in middleware function,
//! middleware process is suspended (not pass actionInfo to next middleware function)
//! for example, if I set the middleware like this order [exampleMiddleware,exampleMiddleware2],
//! exampleMiddleware2 doesn't become active (process is ended at exampleMiddleware)
//! after finishing middleware process, action dispatch is executed

//? so, what is "redux-thunk"
//it is simple. just middleware.
//only difference is that it has "if" checker for functional action cases
//in other words, if I pose this middleware function in the middleware array of configureStore,
//I can send function as an action
//! and because reduxThunk has it's own next(action), I don't need to write this in the redux-thunk function
//! if I send asynchronous function as an action,
//! NOTE, the whole middleware process wait for processing this asynchronous middleware function.
function thunkStructure(extraArgument?: any) {
  return ({ dispatch, getState }: any) => (next: any) => (action: any) => {
    if (typeof action === "function") {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

//! but, unfortunately, redux-thunk has implicit problem. = perlex action dummy...
//! so, instead of redux-thunk, I think redux-saga is more trimmy and easy
/////////////////////////////////////////////////////////////////////////////////////////
export interface CombineState {
  homeReducer: HomeState;
}

const combine = combineReducers({ homeReducer });
const middleware = [logger];

export const store = configureStore({
  reducer: combine,
  middleware,
});
