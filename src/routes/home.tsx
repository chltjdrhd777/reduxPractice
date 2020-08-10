import React from "react";
import MovieRows from "../components/movieRows";
import requests from "../axios/requestAPI";
import { createGlobalStyle } from "styled-components";
import Banner from "../components/banner";

export default () => {
  return (
    <div>
      <GloabalCSS />
      <Banner />
      <MovieRows
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.netflixOriginal}
        isLargePoster={true}
      />
      <MovieRows title="TRENDING NOW" fetchUrl={requests.trend} />
      <MovieRows title="Action Movies" fetchUrl={requests.actionMovies} />
      <MovieRows title="Comedy Movies" fetchUrl={requests.comedyMovies} />
      <MovieRows title="Romance Movies" fetchUrl={requests.romanceMovies} />
      <MovieRows title="Horror Movies" fetchUrl={requests.horrorMovies} />
      <MovieRows title="Documentaries" fetchUrl={requests.documentaries} />
    </div>
  );
};

const GloabalCSS = createGlobalStyle`
  * {
    margin:0;
  }
`;
