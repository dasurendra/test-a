import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart"; // Import the health icon
import { Navbara } from "./Navbara";
import { Sidebar } from "./sidebar";
import { Footer } from "./Footer";

export const DbManagement = () => {
  const [status, setStatus] = useState("Running");

  const handleAction = (action) => {
    alert(`Action "${action}" executed for PostgreSQL`);
    if (action === "Reboot") setStatus("Rebooting...");
    if (action === "Stop") setStatus("Stopped");
    if (action === "Start") setStatus("Running");
    // Add more action handling logic as required
  };

  return (
    <Box sx={{ marginLeft: "250px", padding: "100px" }}>
      <Navbara />
      <Sidebar />
      <Typography
        variant="h4"
        gutterBottom
        style={{ textAlign: "center", marginBottom: "32px" }}
      >
        Database Management
      </Typography>
      <Card>
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" style={{ textAlign: "center" }}>
              Summary
            </Typography>
          </Box>
          <Divider sx={{ marginY: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <Typography>
                <strong>Status:</strong> {status}
              </Typography>
              <Typography>
                <strong>Endpoint:</strong> postgres-db.example.com
              </Typography>
              <Typography>
                <strong>Engine:</strong> postgres
              </Typography>
              <Typography>
                <strong>Class:</strong> db.t3.medium
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>
                <strong>Allocated Storage:</strong> 100GB
              </Typography>
              <Typography>
                <strong>Connection:</strong> 40
              </Typography>
              <Typography>
                <strong>Region:</strong> us-east-1
              </Typography>
            </Grid>
            {/* Health icon positioned at the top right */}

            <Typography>
              <strong>Health:</strong>
              <Button>
                <MonitorHeartIcon color="action" fontSize="large" />
              </Button>
            </Typography>
          </Grid>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleAction("Reboot")}
          >
            Reboot
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleAction("Stop")}
          >
            Stop
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => handleAction("Start")}
          >
            Start
          </Button>
        </CardActions>
      </Card>

      <Box sx={{ marginTop: "80px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Update Security Group</Typography>
                <Typography variant="body2">
                  Modify the inbound and outbound rules of the database.
                </Typography>
              </CardContent>
              <CardActions>
                <Box></Box>

                <Button
                  variant="contained"
                  onClick={() => handleAction("Update Security Group")}
                >
                  Update
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Apply Updates</Typography>
                <Typography variant="body2">
                  Perform maintenance updates and apply patches.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  onClick={() => handleAction("Apply Updates")}
                >
                  Apply
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Manage Backups</Typography>
                <Typography variant="body2">
                  Configure automated backups or restore from a snapshot.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  onClick={() => handleAction("Manage Backups")}
                >
                  Manage
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Performance Tuning</Typography>
                <Typography variant="body2">
                  Optimize database parameters for better performance.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  onClick={() => handleAction("Performance Tuning")}
                >
                  Optimize
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Scale Storage</Typography>
                <Typography variant="body2">
                  Increase or decrease the allocated storage size.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  onClick={() => handleAction("Scale Storage")}
                >
                  Scale
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Modify Parameter Group</Typography>
                <Typography variant="body2">
                  Change database configuration settings.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  onClick={() => handleAction("Modify Parameter Group")}
                >
                  Modify
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};
