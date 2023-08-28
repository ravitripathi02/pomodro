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
    <div className="main_log">
      <div className="login_form">
        <div className="login">
          <h1>Reset Password</h1>
        </div>
        <div className="login_con">Enter your detail below to continue</div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input className="name" type="text" name="email" placeholder="Email" required />

          <button className="login_btn">Reset</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPass;
