import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
} from "@mui/material";
import { Navbara } from "../Dashboard/Navbara";
import { Sidebar } from "../Dashboard/sidebar";

export const RdsTable = () => {
  // Database data
  const [databases, setDatabases] = useState([
    {
      id: 1,
      name: "PostgreSQL",

      features: "ACID compliance, extensibility, and SQL standards support.",
      useCases: "Web apps, analytics, and geospatial applications.",
    },
    {
      id: 2,
      name: "Amazon Aurora",
      description:
        "Relational database built for the cloud, compatible with MySQL and PostgreSQL.",
      features: "High availability, scalability, and cost-effectiveness.",
      useCases: "Enterprise-grade applications and SaaS platforms.",
    },
    {
      id: 3,
      name: "MySQL",
      description: "Popular open-source relational database management system.",
      features: "Ease of use, community support, and reliability.",
      useCases: "E-commerce, web applications, and blogging systems.",
    },
    {
      id: 4,
      name: "Amazon DynamoDB",
      description: "Fully managed NoSQL database service.",
      features: "Key-value store, global tables, and serverless scalability.",
      useCases: "IoT, mobile apps, and real-time analytics.",
    },
    {
      id: 5,
      name: "Amazon ElastiCache",
      description: "In-memory data store and cache for real-time applications.",
      features: "Redis and Memcached support, low-latency caching.",
      useCases: "Gaming leaderboards, session storage, and real-time chat.",
    },
  ]);

  const handleAction = (dbName, action) => {
    alert(`Action "${action}" executed for database "${dbName}"`);
    // Add logic for handling actions like enabling/disabling databases
  };

  return (
    <>
      <Navbara />
      <Sidebar />
      <div
        style={{ padding: "180px", marginLeft: "120px", textAlign: "center" }}
      >
        <Typography variant="h4" gutterBottom>
          AWS Databases
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>

                <TableCell>Features</TableCell>
                <TableCell>Use Cases</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {databases.map((db) => (
                <TableRow key={db.id}>
                  <TableCell>{db.name}</TableCell>

                  <TableCell>{db.features}</TableCell>
                  <TableCell>{db.useCases}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      onClick={() => handleAction(db.name, "Enable")}
                      style={{ marginRight: "18px" }}
                    >
                      Launch
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};
