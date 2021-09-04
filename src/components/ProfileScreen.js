import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Navbar from "./Navbar";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const history = useHistory();

  const signOut = () => {
    auth.signOut();
    history.push("/");
  };

  return (
    <Container>
      <Navbar />
      <ProfileScreenBody>
        <h1>Edit Profile</h1>
        <ProfileScreenInfo>
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
          <ProfileScreenDetails>
            <h2>{user.email}</h2>
            <ProfileScreenPlans>
              <h3>Plans</h3>
              <button onClick={signOut}>Sign out</button>
            </ProfileScreenPlans>
          </ProfileScreenDetails>
        </ProfileScreenInfo>
      </ProfileScreenBody>
    </Container>
  );
}

export default ProfileScreen;

const Container = styled.div`
  height: 100vh;
  color: white;
`;

const ProfileScreenBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 8%;
  max-width: 800px;

  > h1 {
    font-size: 60px;
    font-weight: 400;
    border-bottom: 1px solid #282c2d;
    margin-bottom: 20px;
  }
`;

const ProfileScreenInfo = styled.div`
  display: flex;
  img {
    height: 100px;
  }
`;

const ProfileScreenDetails = styled.div`
  color: white;
  margin-left: 25px;
  flex: 1;

  > h2 {
    background-color: grey;
    padding: 15px;
    font-size: 15px;
    padding-left: 20px;
  }
`;

const ProfileScreenPlans = styled.div`
  margin-top: 20px;

  > button {
    padding: 10px 20px;
    font-size: 1rem;
    margin-top: 5%;
    width: 100%;
    color: white;
    background-color: #e50914;
    font-weight: 600;
    border: none;
    cursor: pointer;
  }
  > h3 {
    border-bottom: 1px solid #282c2d;
    padding-bottom: 10px;
  }
`;
