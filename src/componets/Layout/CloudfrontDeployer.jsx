import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Grid,
} from "@mui/material";
import { Navbara } from "../Dashboard/Navbara";
import { Sidebar } from "../Dashboard/sidebar";

export const CloudFrontDeployer = () => {
  const [originDomainName, setOriginDomainName] = useState("");
  const [priceClass, setPriceClass] = useState("PriceClass_100");
  const [enabled, setEnabled] = useState(true);
  const [defaultRootObject, setDefaultRootObject] = useState("index.html");
  const [viewerProtocolPolicy, setViewerProtocolPolicy] =
    useState("redirect-to-https");
  const [originPath, setOriginPath] = useState("");
  const [defaultTTL, setDefaultTTL] = useState(86400);
  const [maxTTL, setMaxTTL] = useState(31536000);
  const [minTTL, setMinTTL] = useState(0);
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("");

  const handleDeploy = async () => {
    try {
      setStatus("Deploying...");
      const payload = {
        originDomainName,
        priceClass,
        enabled,
        defaultRootObject,
        viewerProtocolPolicy,
        originPath,
        defaultTTL,
        maxTTL,
        minTTL,
        comment,
      };
      console.log("Deployment payload:", payload);
      setStatus("Deployment Successful! (Simulated)");
    } catch (error) {
      setStatus(`Deployment Failed: ${error.message}`);
    }
  };

  return (
    <>
      <Navbara />
      <Sidebar />
      <Box
        sx={{
          maxWidth: 1000,
          marginX: "380px",
          marginY: "100px",

          padding: 10,
          backgroundColor: "#f9f9f9",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Deploy CloudFront Distribution
        </Typography>

        <Grid container spacing={2}>
          {/* Origin Domain Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Origin Domain Name"
              variant="outlined"
              fullWidth
              value={originDomainName}
              onChange={(e) => setOriginDomainName(e.target.value)}
              required
            />
          </Grid>

          {/* Price Class */}
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Price Class"
              variant="outlined"
              fullWidth
              value={priceClass}
              onChange={(e) => setPriceClass(e.target.value)}
              helperText="Choose a price class"
            >
              <MenuItem value="PriceClass_100">PriceClass_100</MenuItem>
              <MenuItem value="PriceClass_200">PriceClass_200</MenuItem>
              <MenuItem value="PriceClass_All">PriceClass_All</MenuItem>
            </TextField>
          </Grid>

          {/* Default Root Object */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Default Root Object"
              variant="outlined"
              fullWidth
              value={defaultRootObject}
              onChange={(e) => setDefaultRootObject(e.target.value)}
              helperText="E.g., index.html"
            />
          </Grid>

          {/* Viewer Protocol Policy */}
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Viewer Protocol Policy"
              variant="outlined"
              fullWidth
              value={viewerProtocolPolicy}
              onChange={(e) => setViewerProtocolPolicy(e.target.value)}
              helperText="Choose HTTP/HTTPS option"
            >
              <MenuItem value="allow-all">Allow All</MenuItem>
              <MenuItem value="redirect-to-https">Redirect to HTTPS</MenuItem>
              <MenuItem value="https-only">HTTPS Only</MenuItem>
            </TextField>
          </Grid>

          {/* Origin Path */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Origin Path"
              variant="outlined"
              fullWidth
              value={originPath}
              onChange={(e) => setOriginPath(e.target.value)}
              helperText="Optional: Path to content"
            />
          </Grid>

          {/* TTLs */}
          <Grid item xs={12} sm={4}>
            <TextField
              label="Default TTL (seconds)"
              type="number"
              variant="outlined"
              fullWidth
              value={defaultTTL}
              onChange={(e) => setDefaultTTL(Number(e.target.value))}
              helperText="Default TTL for cache"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Max TTL (seconds)"
              type="number"
              variant="outlined"
              fullWidth
              value={maxTTL}
              onChange={(e) => setMaxTTL(Number(e.target.value))}
              helperText="Maximum TTL"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Min TTL (seconds)"
              type="number"
              variant="outlined"
              fullWidth
              value={minTTL}
              onChange={(e) => setMinTTL(Number(e.target.value))}
              helperText="Minimum TTL"
            />
          </Grid>

          {/* Enable/Disable */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={enabled}
                  onChange={(e) => setEnabled(e.target.checked)}
                />
              }
              label="Enable Distribution"
            />
          </Grid>

          {/* Comment */}
          <Grid item xs={12}>
            <TextField
              label="Comment"
              variant="outlined"
              fullWidth
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              helperText="Optional: Add a description"
            />
          </Grid>

          {/* Deploy Button */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleDeploy}
              disabled={!originDomainName}
            >
              Deploy
            </Button>
          </Grid>

          {/* Status */}
          {status && (
            <Grid item xs={12}>
              <Typography variant="body1" align="center">
                {status}
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </>
  );
};
