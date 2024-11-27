import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Typography,
  Switch,
  Box,
} from "@mui/material";
import { Navbara } from "../Dashboard/Navbara";
import { Sidebar } from "../Dashboard/sidebar";

const initialBuckets = [
  {
    name: "example-bucket-1",
    region: "us-east-1",
    createdAt: "2024-11-20 10:30:00",
    publicAccess: false,
  },
  {
    name: "my-static-assets",
    region: "ap-south-1",
    createdAt: "2024-11-22 12:15:00",
    publicAccess: true,
  },
  {
    name: "backup-logs",
    region: "eu-west-1",
    createdAt: "2024-11-25 08:45:00",
    publicAccess: false,
  },
];

export const S3BucketManager = () => {
  const [buckets, setBuckets] = useState(initialBuckets);
  const [newBucketName, setNewBucketName] = useState("");
  const [newBucketRegion, setNewBucketRegion] = useState("us-east-1");

  const togglePublicAccess = (name) => {
    setBuckets((prevBuckets) =>
      prevBuckets.map((bucket) =>
        bucket.name === name
          ? { ...bucket, publicAccess: !bucket.publicAccess }
          : bucket
      )
    );
  };

  const addBucket = () => {
    if (newBucketName.trim() === "") {
      alert("Bucket name cannot be empty.");
      return;
    }
    const newBucket = {
      name: newBucketName,
      region: newBucketRegion,
      createdAt: new Date().toISOString(),
      publicAccess: false,
    };
    setBuckets([newBucket, ...buckets]);
    setNewBucketName("");
    setNewBucketRegion("us-east-1");
  };

  return (
    <>
      <Navbara />
      <Sidebar />
      <Box
        sx={{
          maxWidth: 1000,
          margin: "auto",
          marginTop: "100px",
          padding: 3,
          backgroundColor: "#f9f9f9",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          align="center"
          sx={{ marginBottom: "29px" }}
        >
          S3 Bucket Manager
        </Typography>

        {/* Add New Bucket Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            marginBottom: 3,
          }}
        >
          <TextField
            label="Bucket Name"
            variant="outlined"
            value={newBucketName}
            onChange={(e) => setNewBucketName(e.target.value)}
            required
            sx={{ flexGrow: 1 }}
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{ height: "56px" }}
            onClick={() => alert(`Searching bucket: ${newBucketName}`)}
          >
            Search
          </Button>
          <TextField
            label="Region"
            variant="outlined"
            value={newBucketRegion}
            onChange={(e) => setNewBucketRegion(e.target.value)}
            required
            sx={{ width: 200 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={addBucket}
            sx={{ height: "56px", marginLeft: "auto" }}
          >
            Create Bucket
          </Button>
        </Box>

        {/* Bucket Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Bucket Name</strong>
                </TableCell>
                <TableCell>
                  <strong>Region</strong>
                </TableCell>
                <TableCell>
                  <strong>Created At</strong>
                </TableCell>
                <TableCell>
                  <strong>Public Access</strong>
                </TableCell>
                <TableCell>
                  <strong>Actions</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {buckets.map((bucket) => (
                <TableRow key={bucket.name}>
                  <TableCell>{bucket.name}</TableCell>
                  <TableCell>{bucket.region}</TableCell>
                  <TableCell>{bucket.createdAt}</TableCell>
                  <TableCell>
                    {bucket.publicAccess ? "Public" : "Private"}
                  </TableCell>
                  <TableCell>
                    <Switch
                      checked={bucket.publicAccess}
                      onChange={() => togglePublicAccess(bucket.name)}
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
