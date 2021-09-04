import React, { useState } from "react";
import styled from "styled-components";
import SignInScreen from "./SignInScreen";

function Login() {
  const [signIn, setSignIn] = useState(false);

  //console.log(signIn);

  return (
    <Container>
      <LoginScreenBackground>
        <img onClick={()=> setSignIn(false)}
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)}>Sign In</button>
        <LoginScreenGradient />
      </LoginScreenBackground>
      <LogInScreenBody>
        {signIn ? (
            
          <SignInScreen />
        
        ) : (
          <>
            <h1>Unlimited films, Tv programmes and more.</h1>
            <h2>Watch anywhere. Cancel at anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <LoginScreenInput>
              <form>
                <input type="email" placeholder="Email Address" />
                <button onClick={() => setSignIn(true)}>GET STARTED</button>
              </form>
            </LoginScreenInput>
          </>
        )}
      </LogInScreenBody>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: 100vh;
  background-size: cover;
  background-image: url("https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg");
`;

const LoginScreenBackground = styled.div`
  img {
    position: fixed;
    left: 0;
    width: 150px;
    object-fit: contain;
    padding-left: 20px;
    cursor: pointer;
  }

  button {
    position: fixed;
    right: 20px;
    top: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background-color: #e50914;
    font-weight: 400;
    border: none;
    cursor: pointer;
  }
`;

const LoginScreenGradient = styled.div`
  width: 100%;
  z-index: 1;
  height: 100vh;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.6)
  );
`;

const LogInScreenBody = styled.div`
  position: absolute;
  top: 30%;
  text-align: center;
  /* margin-top: -65vh; */
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  z-index: 1;
  color: white;
  padding: 20px;
  > h1 {
    font-size: 3.125rem;
    margin-bottom: 20px;
  }
  > h2 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 30px;
  }
  > ************************h3 {
    font-size: 1.3rem;
    font-weight: 400;
  }
`;

const LoginScreenInput = styled.div`
  margin: 20px;
  form {
    input {
      padding: 10px;
      outline-width: 0;
      height: 30px;
      width: 30%;
      border: none;
      max-width: 600px;
    }
    button {
      padding: 16px 20px;
      font-size: 1rem;
      color: #fff;
      background-color: #e50914;
      border: none;

      font-weight: 600;
      cursor: pointer;
    }
  }
`;
