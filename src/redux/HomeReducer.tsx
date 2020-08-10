import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";

//! createAction
//const actionName = createAction<payloadType>(reducer action type);

//!createReducer
export interface HomeState {
  banner: {};
}

//? actions //
const actionsType = {
  bannerFetch: "BANNER",
};
const banner = createAction<any>(actionsType.bannerFetch);
export const actions = { banner }; // just for unification of actions

//? reducer //
export const homeReducer = createReducer<HomeState>(
  { banner: [] }, //state structure
  {
    [banner.type]: (state: HomeState, action: PayloadAction<any>) => {
      state.banner = action.payload;
    },
  } // every action
  //PayloadAction = defines what this action containes as an second property
);
