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
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

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
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: 600,
        margin: "auto",
        mt: 4,
        padding: 2,
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h5" align="center">
        Create Rate Limit Rule
      </Typography>

      {/* Rule Name */}
      <TextField
        label="Rule Name"
        name="ruleName"
        value={formData.ruleName}
        onChange={handleChange}
        fullWidth
        required
      />

      {/* Description */}
      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        fullWidth
        required
      />

      {/* Match Conditions - IP Address */}
      <TextField
        label="IP Address or Range"
        name="ipAddress"
        value={formData.ipAddress}
        onChange={handleChange}
        fullWidth
      />

      {/* Match Conditions - Geolocation */}
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

      {/* Match Conditions - URI Path */}
      <TextField
        label="URI Path"
        name="uri"
        value={formData.uri}
        onChange={handleChange}
        fullWidth
        required
      />

      {/* Rate Limiting */}
      <TextField
        label="Rate Limit (e.g., 6/5/15)"
        name="rateLimit"
        value={formData.rateLimit}
        onChange={handleChange}
        fullWidth
        required
      />

      {/* Time Frame for Rate Limit */}
      <TextField
        label="Time Frame (seconds)"
        name="timeFrame"
        value={formData.timeFrame}
        onChange={handleChange}
        fullWidth
        required
      />

      {/* Response Action */}
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

      {/* Custom Message Type */}
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

      {/* Custom Message Box */}
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

      {/* Rule Priority */}
      <TextField
        label="Priority (1-10)"
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        fullWidth
        required
      />

      {/* Environment */}
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

      {/* Logging Options */}
      <FormGroup>
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
      </FormGroup>

      {/* Advanced Options */}
      <FormGroup>
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
      </FormGroup>

      {/* Submit Button */}
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit Rule
      </Button>
    </Box>
  );
};

export default WAFRuleForm;
