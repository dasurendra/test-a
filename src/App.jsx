import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./componets/Login";
import SignUp from "./componets/Registration";
import { Dashboard } from "./componets/Dashboard/Dashboard";
import WAFRuleForm from "./componets/rule/WafRuleBuilder";
import Redirection from "./componets/rule/Redirection";
import { RdsTable } from "./componets/Layout/rds";
import { DbManagement } from "./componets/Dashboard/DbManagement";
import { CloudFrontDeployer } from "./componets/Layout/CloudfrontDeployer";
import { CloudFrontTable } from "./componets/Layout/CloudFronttable";
import { S3BucketManager } from "./componets/Layout/S3BuckerManger";

function App() {
  return (
    <Router>
      <Routes>
        {" "}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/rule" element={<WAFRuleForm />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/redirection" element={<Redirection />} />
        <Route path="/database" element={<RdsTable />} />
        <Route path="/dbmanagement" element={<DbManagement />} />
        <Route path="/createcdn" element={<CloudFrontDeployer />} />
        <Route path="/cdn" element={<CloudFrontTable />} />
        <Route path="/s3manager" element={<S3BucketManager />} />
      </Routes>
    </Router>
  );
}

export default App;
