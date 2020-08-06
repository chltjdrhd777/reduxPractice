import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/HomeReducer";
import { CombineState } from "../redux/combinedStore";

interface RowsProps {
  title: string;
  fetchUrl: string;
}

function MovieRows({ title, fetchUrl }: RowsProps) {
  const dispatch = useDispatch();
  const stateCheckor = useSelector((store: CombineState) => store);

  useEffect(() => {
    dispatch(actions.moviesFetch(fetchUrl));
  }, [dispatch, fetchUrl]);
  return (
    <div>
      <h2>{title}</h2>
      {/*container-> posters*/}
    </div>
  );
}

export default MovieRows;
