import React from "react";
import MovieRows from "../components/movieRows";
import { actions } from "../redux/HomeReducer";
import { useSelector, useDispatch } from "react-redux";
import { HomeState } from "../redux/HomeReducer";

export default () => {
  const dispatch = useDispatch();
  const homeState = useSelector((state: HomeState) => state);
  console.log(homeState);

  return (
    <div>
      <MovieRows title="hey" />
      <MovieRows title="howAreYou" />
      <button onClick={() => dispatch(actions.testAction(Math.random()))}>
        hi
      </button>
    </div>
  );
};
