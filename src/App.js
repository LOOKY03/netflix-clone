import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./components/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        // console.log(userAuth);
        dispatch(login( {
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        //logged out
        dispatch(logout())
      }
    });

    return unsubscribe
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/" exact>
              <HomeScreen />
            </Route>
            <Route path="/profile">
            <ProfileScreen/>
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
