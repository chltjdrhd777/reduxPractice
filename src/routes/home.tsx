import React from "react";
import MovieRows from "../components/movieRows";
import requests from "../axios/requestAPI";

export default () => {
  return (
    <div>
      <MovieRows
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.netflixOriginal}
      />
      <MovieRows title="Trending Now" fetchUrl={requests.trend} />
    </div>
  );
};
