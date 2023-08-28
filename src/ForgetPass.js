import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { database } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";
const ForgetPass = () => {
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emalVal = e.target.email.value;
    sendPasswordResetEmail(database, emalVal)
      .then((data) => {
        alert("Check your gmail");
        history("/");
      })
      .catch((err) => {
        alert(err.code);
      });
  };
  return (
    <div class="main_log">
      <div class="login_form">
        <div class="login">
          <h1>Reset Password</h1>
        </div>
        <div class="login_con">Enter your detail below to continue</div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input class="name" type="text" name="email" placeholder="Email" />

          <button class="login_btn">Reset</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPass;
