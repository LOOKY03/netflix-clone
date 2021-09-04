import React, { useRef } from "react";
import styled from "styled-components";
import { auth } from "../firebase";

function SignInScreen() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span>New to Netflix?</span>{" "}
          <span onClick={register}>Sign up now.</span>
        </h4>
      </form>
    </Container>
  );
}

export default SignInScreen;

const Container = styled.div`
  max-width: 300px;
  padding: 70px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(0, 0, 0, 0.85);

  form {
    display: grid;
    flex-direction: column;

    h1 {
      text-align: left;
      margin-bottom: 25px;
    }

    h4 {
      text-align: left;
      margin-top: 30px;

      span:nth-child(2) {
        color: white;

        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }

    span {
      color: grey;
    }

    input {
      padding: 5px 15px;
      outline-width: 0;
      height: 40px;
      margin-bottom: 14px;
      border-radius: 5px;
    }
    button {
      padding: 16px 20px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      border-radius: 5px;
      border: none;
      color: #fff;
      border-radius: 5px;
      background-color: #e50914;
      margin-top: 20px;
    }
  }
`;
