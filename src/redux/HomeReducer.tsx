import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";

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
export const actions = { testAction };

//? reducer //
export const homeReducer = createReducer<HomeState>(
  { movies: [] }, //state structure
  {
    [testAction.type]: ({ movies }, action: PayloadAction<number>) => {
      console.log("work");
      movies.push(action.payload);
    },
  } // every action
);
