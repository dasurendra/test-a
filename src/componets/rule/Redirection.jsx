import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const Redirection = () => {
  const [formData, setFormData] = useState({
    fromUrl: "",
    toUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send rule to the backend to create the redirection rule
    fetch("http://your-backend-api/rules", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log("Rule created:", data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ padding: 2 }}>
      <Typography variant="h5">Create Redirection Rule</Typography>
      <TextField
        label="From URL"
        name="fromUrl"
        value={formData.fromUrl}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="To URL"
        name="toUrl"
        value={formData.toUrl}
        onChange={handleChange}
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Create Rule
      </Button>
    </Box>
  );
};

export default Redirection;
