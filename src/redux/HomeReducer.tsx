import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";

//! createAction
//const actionName = createAction<payloadType>(reducer action type);

//!createReducer
export interface HomeState {
  banner: any;
  navBoolean: boolean;
}

//? actions //
const actionsType = {
  bannerFetch: "BANNER",
  naveShowing: "NAVAPPEAR",
};
const banner = createAction<any>(actionsType.bannerFetch);
const navShow = createAction<boolean>(actionsType.naveShowing);
export const actions = { banner, navShow }; // just for unification of actions

//? reducer //
export const homeReducer = createReducer<HomeState>(
  { banner: {}, navBoolean: false }, //state structure
  {
    [banner.type]: (state: HomeState, action: PayloadAction<any>) => {
      state.banner = action.payload;
    },
    [navShow.type]: (state: HomeState, action: PayloadAction<boolean>) => {
      state.navBoolean = action.payload;
    },
  } // every action
  //PayloadAction = defines what this action containes as an second property
);
