import React, { useState } from "react";
import "./App.css";
import { database } from "./FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  console.log(login ? "signin" : "signup");
  const history = useNavigate();
  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (type == "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          setLogin(!login);
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };
  const SignUp = () => {
    setLogin(!login);
    setEmail("");
    setPassword("");
  };
  const SignIn = () => {
    setLogin(!login);
    setEmail("");
    setPassword("");
  };
  const forgetPass = () => {
    history("/forget");
  };
  return (
    <div>
      {login === true ? (
        <div className="main_log">
          <div className="login_form">
            <div className="login">
              <h1>SignIn</h1>
            </div>
            <div className="login_con">Enter your detail below to continue</div>
            <form
              onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}
            >
              <input
                className="name"
                type="text"
                name="email"
                placeholder="Email"
              />

              <input
                className="password"
                type="password"
                name="password"
                placeholder="Password"
              />

              <div className="forget" onClick={forgetPass}>
                Forget Password?
              </div>
              <button className="login_btn">Signin</button>
              <div className="user">
                New user please{" "}
                <span onClick={SignUp} className="sign">
                  <pre> SignUp</pre>
                </span>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="main_log">
          <div className="login_form">
            <div className="login">
              <h1>SignUp</h1>
            </div>
            <div className="login_con">Enter your detail below to continue</div>
            <form
              onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}
            >
              <input
                className="name"
                type="text"
                name="email"
                placeholder="Email"
              />
              <input
                className="password"
                type="password"
                name="password"
                placeholder="Password"
              />

              <button className="login_btn">Signup</button>
              <div className="user">
                Already have an account{" "}
                <span onClick={SignIn} className="sign">
                  <pre> SignIn</pre>
                </span>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
