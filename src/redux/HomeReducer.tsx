import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import axios from "../axios/axios";
import requests from "../axios/requestAPI";
import {
  call,
  put,
  takeEvery,
  takeLatest,
  fork,
  all,
} from "redux-saga/effects";

const FetchDataTypes = {
  requsetStart: "FETCH_START",
  requestSuccess: "FETCH_SUCCESS",
  requestFailure: "FETCH_FAILURE",
} as const; //! NOTE, fetTypes should be in the same module of saga root reducer

//! createAction
//? default in typescript
//? const name = createAction<payloadDef,type> (type);

//? example
//? const test1 = createAction<string,'test1'> ('test1'); <--- if I set the second generic value, typeDef is restricted by this
//result = {type:test1, payload:undefined}
//? const check1 = test1('excuseme?') <--- it is like // check1 = test1('test1',function(text:string){ return {payload:"excuseme"})
//result = {type:test1, payload:"excuseme?"}

//!createReducer
export interface HomeState {
  movies: number[];
}

//? actions //
const testAction = createAction<number>("test1"); // just it makes an object {type:... , payload: ...}
const movieFetchAction = createAction(FetchDataTypes.requsetStart);
export const actions = { testAction, movieFetchAction };

//? for redux-saga(asynchronous)//

function* moviesFetch() {
  try {
    const movies = yield axios.get(requests.netflixOriginal);
    yield put({ type: "REQ_END", payload: movies });
  } catch (err) {
    console.log(err);
  }
} //saga function should maintains try{}catch{} structure

function* handleMovieAxios() {
  yield takeEvery(FetchDataTypes.requsetStart, moviesFetch);
}
//it means,
//"if requestStart action type is called, run movieFetch
//"takeLatest" : if another asynchronous call is excuted, older one is suspended and new one is returned
//"takeEvery" : do all asynchronous call at the same time
export default function* homeReducerSaga() {
  yield all([fork(handleMovieAxios)]);
}

//if I have no choice but to use only one saga stored in sagamiddleware,
//it isn't effecient
// but all([]) allows me to segregate all saga functions and use them all. cool
// sagafunctions, I mean, it is a function which "yield takeEvery or takeLatest" <------ checks the process of action callings
// so, if there is too many sagas, use this like that "all([fork(f1), fork(f2),.....])"
// fork() means I use this function as asynchronous
// on the contrary, call() means I use this function as synchronous

//? reducer //
export const homeReducer = createReducer<HomeState>(
  { movies: [] }, //state structure
  {
    [testAction.type]: ({ movies }, action: PayloadAction<number>) => {
      console.log("work");
      movies.push(action.payload);
    },
    REQ_END: ({ movies }, action: PayloadAction<any>) => {
      movies.push(action.payload);
    },
  } // every action
  //PayloadAction = defines what this action containes as an second property
);
