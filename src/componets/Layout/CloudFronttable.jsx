import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Switch,
  Box,
} from "@mui/material";
import { Navbara } from "../Dashboard/Navbara";
import { Sidebar } from "../Dashboard/sidebar";

// Mock data for CloudFront distributions
const initialData = [
  {
    id: "E1A2B3C4D5E6",
    alias: "www.example.com",
    lastDeployment: "2024-11-25 14:32:45",
    enabled: true,
  },
  {
    id: "F2B3C4D5E6A1",
    alias: "cdn.mysite.org",
    lastDeployment: "2024-11-20 09:15:12",
    enabled: false,
  },
  {
    id: "G3C4D5E6A1B2",
    alias: "static.contenthub.net",
    lastDeployment: "2024-11-10 11:50:33",
    enabled: true,
  },
];

export const CloudFrontTable = () => {
  const [distributions, setDistributions] = useState(initialData);

  // Toggle the enabled status of a distribution
  const toggleEnabled = (id) => {
    setDistributions((prevDistributions) =>
      prevDistributions.map((dist) =>
        dist.id === id ? { ...dist, enabled: !dist.enabled } : dist
      )
    );
  };

  // Function to simulate adding a new CloudFront distribution
  const addDistribution = () => {
    const newDistribution = {
      id: `D${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
      alias: `new-alias-${distributions.length + 1}.cloudfront.net`,
      lastDeployment: new Date().toISOString(),
      enabled: true,
    };
    setDistributions([newDistribution, ...distributions]);
  };

  return (
    <>
      <Navbara />

      <Sidebar />
      <Box
        sx={{
          maxWidth: 1000,
          marginX: "auto",
          marginY: "110px",
          padding: 3,
          backgroundColor: "#f9f9f9",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Typography variant="h5" gutterBottom align="center">
          CloudFront Distributions
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={addDistribution}
          sx={{ marginBottom: 2 }}
        >
          Add New Distribution
        </Button>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>CloudFront ID</strong>
                </TableCell>
                <TableCell>
                  <strong>Alias</strong>
                </TableCell>
                <TableCell>
                  <strong>Last Deployment</strong>
                </TableCell>
                <TableCell>
                  <strong>Status</strong>
                </TableCell>
                <TableCell>
                  <strong>Actions</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {distributions.map((dist) => (
                <TableRow key={dist.id}>
                  <TableCell>{dist.id}</TableCell>
                  <TableCell>{dist.alias}</TableCell>
                  <TableCell>{dist.lastDeployment}</TableCell>
                  <TableCell>{dist.enabled ? "Enabled" : "Disabled"}</TableCell>
                  <TableCell>
                    <Switch
                      checked={dist.enabled}
                      onChange={() => toggleEnabled(dist.id)}
                      color="primary"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
