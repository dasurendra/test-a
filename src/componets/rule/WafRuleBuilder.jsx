import React, { useState } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
  Paper,
} from "@mui/material";
import { Navbara } from "../Dashboard/Navbara";
import { Sidebar } from "../Dashboard/sidebar";

const WAFRuleForm = () => {
  const [formData, setFormData] = useState({
    ruleName: "",
    description: "",
    ipAddress: "",
    geolocation: "",
    uri: "",
    rateLimit: "",
    timeFrame: "",
    responseAction: "",
    messageType: "",
    customMessage: "",
    priority: "",
    environment: "Production",
    logLevel: "INFO",
    logToService: false,
    regexMatch: false,
    botProtection: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Handle form submission (e.g., API call)
  };

  return (
    <>
      <Navbara />
      <Sidebar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#f4f7fb", // Light background to match the CloudFront style
        }}
      >
        <Paper
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            width: "800px",
            padding: 3,
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: 3,
          }}
        >
          <Typography variant="h5" align="center" sx={{ color: "#333" }}>
            Create Rate Limit Rule
          </Typography>

          {/* Row 1: Rule Name and Description */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Rule Name"
                name="ruleName"
                value={formData.ruleName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
          </Grid>

          {/* Row 2: IP Address and Geolocation */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="IP Address or Range"
                name="ipAddress"
                value={formData.ipAddress}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Geolocation</InputLabel>
                <Select
                  name="geolocation"
                  value={formData.geolocation}
                  onChange={handleChange}
                >
                  <MenuItem value="US">United States</MenuItem>
                  <MenuItem value="AU">Australia</MenuItem>
                  <MenuItem value="IN">India</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          {/* Row 3: URI and Rate Limit */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="URI Path"
                name="uri"
                value={formData.uri}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Rate Limit (e.g., 6/5/15)"
                name="rateLimit"
                value={formData.rateLimit}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
          </Grid>

          {/* Row 4: Time Frame and Response Action */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Time Frame (seconds)"
                name="timeFrame"
                value={formData.timeFrame}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Response Action</InputLabel>
                <Select
                  name="responseAction"
                  value={formData.responseAction}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="Allow">Allow</MenuItem>
                  <MenuItem value="Block">Block</MenuItem>
                  <MenuItem value="Count">Count</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          {/* Row 5: Message Type and Custom Message */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Message Type</InputLabel>
                <Select
                  name="messageType"
                  value={formData.messageType}
                  onChange={handleChange}
                >
                  <MenuItem value="Plain Text">Plain Text</MenuItem>
                  <MenuItem value="HTML">HTML</MenuItem>
                  <MenuItem value="JSON">JSON</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              {formData.messageType && (
                <TextField
                  label={`Custom Message (${formData.messageType})`}
                  name="customMessage"
                  value={formData.customMessage}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  rows={4}
                  placeholder={`Enter your ${formData.messageType.toLowerCase()} message`}
                />
              )}
            </Grid>
          </Grid>

          {/* Row 6: Priority and Environment */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Priority (1-10)"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Environment</InputLabel>
                <Select
                  name="environment"
                  value={formData.environment}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="Production">Production</MenuItem>
                  <MenuItem value="Staging">Staging</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          {/* Row 7: Logging Options */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.logToService}
                    onChange={handleChange}
                    name="logToService"
                  />
                }
                label="Log to External Service"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Log Level</InputLabel>
                <Select
                  name="logLevel"
                  value={formData.logLevel}
                  onChange={handleChange}
                  disabled={!formData.logToService}
                >
                  <MenuItem value="INFO">INFO</MenuItem>
                  <MenuItem value="DEBUG">DEBUG</MenuItem>
                  <MenuItem value="ERROR">ERROR</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          {/* Row 8: Advanced Options */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.regexMatch}
                    onChange={handleChange}
                    name="regexMatch"
                  />
                }
                label="Enable Regex Matching"
              />
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit Rule
          </Button>
        </Paper>
      </Box>
    </>
  );
};

export default WAFRuleForm;
