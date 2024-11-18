import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./componets/Login";
import SignUp from "./componets/Registration";

import { Dashboard } from "./componets/Dashboard/Dashboard";
import WAFRuleForm from "./componets/rule/WafRuleBuilder";
import Redirection from "./componets/rule/Redirection";

function App() {
  return (
    <Router>
      <Routes>
        {" "}
        <Route path="/" element={<SignIn />} />
        <Route path="/rule" element={<WAFRuleForm />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/redirection" element={<Redirection />} />
      </Routes>
    </Router>
  );
}

export default App;
