import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CombineState } from "../redux/combinedStore";
import axios from "../axios/axios";
import { actions } from "../redux/HomeReducer";

interface RowsProps {
  title: string;
  fetchUrl: string;
}

export interface MoviesDataType {
  data: {};
}

function MovieRows({ title, fetchUrl }: RowsProps) {
  const dispatch = useDispatch();
  const stateCheckor = useSelector((store: CombineState) => store);

  //? API CALL by thunk //
  useEffect(() => {
    async function getMovies() {
      try {
        const moviesData = await axios.get<MoviesDataType>(fetchUrl);
        dispatch({ type: actions.type.PENDING });
        dispatch(actions.action.fetchMovies(moviesData));
      } catch (err) {
        dispatch({ type: actions.type.FAILURE });
      }
    }

    dispatch(getMovies);
  }, [dispatch, fetchUrl]);

  return (
    <div>
      <h2>{title}</h2>
      {/*container-> posters*/}
    </div>
  );
}

export default MovieRows;
