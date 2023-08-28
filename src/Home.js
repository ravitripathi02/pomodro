import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import React from "react";
import "./App.css";
import { database } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";
const Home = () => {
  const history = useNavigate();
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setUser(user);
  });
  console.log(user);
  console.log(unsubscribe);
  const handleClick = () => {
    signOut(database).then((val) => {
      console.log(val, "val");
      history("/");
    });
  };
  const signUp = () => {
    history("/");
  };
  return (
    <div className="App1">
      <Timer />
      {user !== null ? (
        <button onClick={handleClick} className="signout">
          SignOut
        </button>
      ) : (
        <button onClick={signUp} className="signout">
          SignUp
        </button>
      )}
    </div>
  );
};

export default Home;
