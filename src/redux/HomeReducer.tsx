import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import axios from "../axios/axios";
import MovieRows, { MoviesDataType } from "../components/movieRows";

//! createAction
//const actionName = createAction<payloadType>(reducer action type);

//!createReducer
export interface HomeState {
  movies: {}[];
}

//? actions //
const movieActionTypes = {
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
};

const fetchMovies = createAction<MoviesDataType>(movieActionTypes.SUCCESS);
export const actions = {
  type: movieActionTypes,
  action: { fetchMovies },
}; // just for unification of actions

//? reducer //
export const homeReducer = createReducer<HomeState>(
  { movies: [] }, //state structure
  {
    [fetchMovies.type]: (
      state: HomeState,
      action: PayloadAction<MoviesDataType>
    ) => {
      state.movies.push(action.payload);
    },
  } // every action
  //PayloadAction = defines what this action containes as an second property
);
