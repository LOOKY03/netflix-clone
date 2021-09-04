import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectMovies, setMovies } from "../features/searchmovieSlice";

const base_url = "https://image.tmdb.org/t/p/original/";

function SearchedMovieScreen() {
  const fetchMovies = useSelector(selectMovies);

  console.log(fetchMovies);

  return (
    <Container>
      {fetchMovies.map((item) => (
        <div>
          <img src={`${base_url}${item.backdrop_path || item.poster_path}`} alt="movie poster" />
          <p>{item.title}</p>
        </div>
      ))}
    </Container>
  );
}

export default SearchedMovieScreen;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  div {
    color: white;
    width: 500px;
    height: 400px;
    padding: 20px;
    transition: transform 100ms;
  }

  img {
    height: 300px;
    width: 500px;
    object-fit: contain;
  }
`;
