import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Form";
import HomePage from "./Home";
import ForgetPass from "./ForgetPass";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/forget" element={<ForgetPass />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
