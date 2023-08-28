import { signOut } from "firebase/auth";
import React from "react";
import "./App.css";
import { database } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";
const Home = () => {
  const history = useNavigate();

  const handleClick = () => {
    signOut(database).then((val) => {
      console.log(val, "val");
      history("/");
    });
  };
  return (
    <div className="App1">
      <Timer />
      <button onClick={handleClick} className="signout">
        SignOut
      </button>
    </div>
  );
};

export default Home;
