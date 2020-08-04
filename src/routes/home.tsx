import React from "react";
import MovieRows from "../components/movieRows";
import { actions } from "../redux/HomeReducer";
import { useSelector, useDispatch } from "react-redux";
import { CombineState } from "../redux/combinedStore";
import requests from "../axios/requestAPI";

export default () => {
  const dispatch = useDispatch();
  const homeState = useSelector((state: CombineState) => state);

  return (
    <div>
      <MovieRows
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.netflixOriginal}
      />
      <MovieRows title="Trending Now" fetchUrl={requests.trend} />
      <button onClick={() => dispatch(actions.testAction(Math.random()))}>
        hi
      </button>
      <button onClick={() => dispatch(actions.movieFetchAction())}>
        for saga
      </button>
    </div>
  );
};
