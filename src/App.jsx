import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./componets/Login";
import SignUp from "./componets/Registration";

import { Dashboard } from "./componets/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {" "}
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
