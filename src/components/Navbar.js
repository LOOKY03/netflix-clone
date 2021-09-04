import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import { selectSearch, setSearchBar } from "../features/searchSlice";
import {
  selectMovies,
  setMovies,
  
} from "../features/searchmovieSlice";

function Navbar({ setQueried }) {
  
  const searchIcon = useSelector(selectSearch);
  const dispatch = useDispatch();

  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

  const handleProfileView = () => {
    dispatch(setSearchBar(false));
    history.push("/profile");
  };

  //moviesearch

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const handelsearchSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
    setQueried(true);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const API_KEY = "dae4955ad22831998335bbe9609e717b";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}}&page=1`;
    axios.get(url).then((res) => {
      //console.log(res.data.results);
      dispatch(setMovies(res.data.results));
    });
  }, [query]);

  console.log(query);

  return (
    <Container navblack={show}>
      <Wrap>
        <NavLogo>
          <img
            onClick={() => {
              dispatch(setSearchBar(true));
              history.push("/");
              //setQueried(false);
            }}
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
          />
        
          {searchIcon && (
            <form onSubmit={handelsearchSubmit}>
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={updateSearch}
              />
            </form>
          )}
        </NavLogo>
        <NavAvatar>
          <img
            onClick={handleProfileView}
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
        </NavAvatar>
      </Wrap>
    </Container>
  );
}

export default Navbar;

const Container = styled.nav`
  position: fixed;
  top: 0;
  padding: 20px;
  width: 100%;
  height: 30px;
  z-index: 1;

  /* animation */
  transition-timing-function: ease-in;
  transition: all 0.5s;

  /* conditional  */
  ${(props) =>
    props.navblack &&
    css`
      background-color: black;
    `}
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavLogo = styled.div`
  img {
    position: fixed;
    top: 10px;
    left: 0;
    width: 80px;
    object-fit: contain;
    padding-left: 20px;
    cursor: pointer;
  }

  form {
    margin-left: 100px;

    input {
      outline: none;
      background: #ededed
        url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png)
        no-repeat 9px center;
      border: solid 1px #ccc;
      padding: 9px 10px 9px 32px;
      width: 55px;

      -webkit-border-radius: 10em;
      -moz-border-radius: 10em;
      border-radius: 10em;

      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      transition: all 0.5s;

      width: 15px;
      padding-left: 10px;
      color: transparent;
      cursor: pointer;

      &:hover {
        background-color: #fff;
      }

      &:focus {
        width: 130px;
        padding-left: 32px;
        color: #000;
        background-color: #fff;
        cursor: auto;
      }
      &::-moz-placeholder {
        color: transparent;
      }

      &::-webkit-input-placeholder {
        color: transparent;
      }
    }
  }
`;

const NavAvatar = styled.div`
  img {
    position: fixed;
    right: 20px;
    width: 30px;
    cursor: pointer;
  }
`;
