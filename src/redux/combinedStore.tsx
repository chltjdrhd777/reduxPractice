import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { homeReducer } from "./HomeReducer";

const combine = combineReducers({ homeReducer });

export const store = configureStore({
  reducer: combine,
});
