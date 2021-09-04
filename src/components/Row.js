import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import axios from "../axios";
import { useDispatch } from "react-redux";
import { setMovie } from "../features/movieSlice";

const BASE_URL = "https://image.tmdb.org/t/p/original/";

function Row({ title, isLargeRow = false, fetchUrl }) {
  const [getMovie, setGetMovie] = useState("");
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }

    fetchData();

    dispatch(setMovie(getMovie));
  }, [fetchUrl, getMovie]);

  console.log(movies)

  const getId = (id) => {
    setGetMovie(id);
  };

  return (
    <Container isLargeRow={isLargeRow}>
      <h2>{title}</h2>
      <RowPosters>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                onClick={() => getId(movie)}
                key={movie.id}
                src={`${BASE_URL}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </RowPosters>
    </Container>
  );
}

export default Row;

const Container = styled.div`
  color: white;
  margin-left: 20px;
  img {
    max-height: 120px;
    object-fit: contain;
    margin-right: 10px;
    width: 100%;
    transition: transform 250ms;

    &:hover {
      transform: scale(1.08);
      opacity: 1;
    }
    ${(props) =>
      props.isLargeRow &&
      css`
        max-height: 250px;

        &:hover {
          transform: scale(1.09);
          opacity: 1;
        }
      `}
  }
`;

const RowPosters = styled.div`
  display: flex;

  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
