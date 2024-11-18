import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

export const RuleConfig = () => {
  const [ruleName, setRuleName] = useState("");

  const handleSave = () => {
    console.log("Rule saved:", ruleName);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create Rule</h2>
      <TextField
        label="Rule Name"
        value={ruleName}
        onChange={(e) => setRuleName(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
        style={{ marginTop: "20px" }}
      >
        Save Rule
      </Button>
    </div>
  );
};
