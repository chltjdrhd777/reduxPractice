import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { put, takeEvery } from "redux-saga/effects";
import axios from "../axios/axios";
//! createAction
//const actionName = createAction<payloadType>(reducer action type);

//!createReducer
export interface HomeState {
  movies: {}[];
}

//!SagaAction
const sagaActions = {
  GET_MOVIES: "GET_MOIVES",
  GET_MOVIES_SUCCESS: "GET_MOVIES_SUCCESS",
};

//? actions //
const moviesFetch = createAction<string>(sagaActions.GET_MOVIES);
export const actions = { moviesFetch }; // just for unification of actions

//? saga//
function* getMovies(action: any) {
  try {
    const getData = yield axios.get(action.payload);
    yield put({
      type: sagaActions.GET_MOVIES_SUCCESS,
      payload: getData,
    });
  } catch (e) {
    yield console.log(e);
  }
} //intercept the action, and run itself with actions data

export function* HomeSagas() {
  yield takeEvery(sagaActions.GET_MOVIES, getMovies);
}

//? reducer //
export const homeReducer = createReducer<HomeState>(
  { movies: [] }, //state structure
  {
    [sagaActions.GET_MOVIES_SUCCESS]: (
      { movies },
      action: PayloadAction<any>
    ) => {
      movies.push(action.payload);
    },
  } // every action
  //PayloadAction = defines what this action containes as an second property
);
