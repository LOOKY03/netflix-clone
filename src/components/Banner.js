import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import axios from "../axios";
import requests from "../requests";
import {selectMovie} from '../features/movieSlice'
import {useSelector} from 'react-redux'

function Banner() {
  const movieItem = useSelector(selectMovie)
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      if (movieItem) {
        setMovie(movieItem)
      } else {
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
      }
     
      return request;
      

    }

    fetchData();
  }, [movieItem]);

  //console.log(movieItem)

  //console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <Container movie={movie}>
      <BannerContent>
        <BannerTitle>
          {movie?.title || movie?.name || movie?.original_name}
        </BannerTitle>
        <BannerButtons>
          <button>Play</button>
          <button>My List</button>
        </BannerButtons>
        <BannerDescription>{truncate(movie?.overview, 150)}</BannerDescription>
      </BannerContent>
      <BannerFadeBottom />
    </Container>
  );
}

export default Banner;

const Container = styled.header`
  height: 448px;
  /* background-color: black; */
  /* background-image: url("https://preview.redd.it/zc3nnfklwz941.jpg?auto=webp&s=c0bcbce019bc5f774529821335c2b962330c3db5"); */
  background-size: cover;
  background-position: center center;
  position: relative;
  object-fit: contain;
  color: white;

  ${(props) =>
    props.movie &&
    css`
      background-image: url("https://image.tmdb.org/t/p/original/${props.movie
        ?.backdrop_path}");
    `}
`;

const BannerContent = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
`;

const BannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;

const BannerButtons = styled.div`
  button {
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: rgba(51, 51, 51, 0.5);
    &:hover {
      background-color: #e6e6e6;
      color: #000;
      transition: all 0.2s;
    }
  }
`;

const BannerDescription = styled.h1`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
  max-width: 360px;
  height: 80px;
`;

const BannerFadeBottom = styled.div`
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;
