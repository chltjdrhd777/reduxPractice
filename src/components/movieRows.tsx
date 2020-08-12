import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "../axios/axios";
import { actions } from "../redux/HomeReducer";
import requests from "../axios/requestAPI";
import styled from "styled-components";
import YouTube from "react-youtube";

import { useSelector } from "react-redux";
import { CombineState } from "../redux/combinedStore";

interface RowsProps {
  title: string;
  fetchUrl: string;
  isLargePoster?: boolean;
}

export interface MoviesDataType {
  results: [];
}

export const base_url = "https://image.tmdb.org/t/p/original/";

function MovieRows({ title, fetchUrl, isLargePoster }: RowsProps) {
  const [movies, setMovies] = useState<{}[]>([]);
  const dispatch = useDispatch();
  const { id } = useSelector((store: CombineState) => store.homeReducer.banner);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      const forBanner = await axios.get(requests.netflixOriginal);
      const { results } = forBanner.data;
      setMovies(request.data.results);
      dispatch(
        actions.banner(results[Math.floor(Math.random() * results.length)])
      );
    }
    fetchData();
  }, [fetchUrl, dispatch]);

  return (
    <Row>
      <h2>{title}</h2>
      <Posts>
        {movies.map((el: any) => (
          <PostsImage
            src={
              isLargePoster
                ? `${base_url}${el.poster_path}`
                : `${base_url}${el.backdrop_path}`
            }
            alt={el.name}
            key={el.id}
            isLargePoster={isLargePoster}
            onClick={() => {
              dispatch(actions.banner(el));
            }}
          />
        ))}
      </Posts>
      {id ? (
        <YouTube
          videoId="XtMThy8QKqU"
          opts={{
            height: "300px",
            width: "300px",
            playerVars: { autoplay: 0 },
          }}
        />
      ) : null}
    </Row>
  );
}

const Row = styled.div`
  margin-left: 20px;
`;
const Posts = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

interface LargeCheck {
  isLargePoster?: boolean;
}

const PostsImage = styled.img<LargeCheck>`
  width: 100%;
  object-fit: contain;
  max-height: ${(props) => (props.isLargePoster ? "250px" : "100px")};
  margin-right: 5px;
  transition: transform 0.5s;
  &:hover {
    transform: ${(props) =>
      props.isLargePoster ? "scale(1.07)" : "scale(1.05)"};
  }
`;

export default MovieRows;
