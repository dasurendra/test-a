import React from "react";
import { Box, Grid, Paper, Typography, Toolbar, Button } from "@mui/material";
import { Sidebar } from "./sidebar";
import { Footer } from "./Footer";
import { Navbara } from "./Navbara";
import { ChartPage } from "./ChartPage";

export const Dashboard = () => {
  const drawerWidth = 240;

  // Array of service data with names and actions
  const services = [
    {
      title: "Provision/Update Services",
      description: "Manage your services",
      actions: ["Update", "Deploy"],
    },
    {
      title: "Database Management",
      description: "Handle your databases",
      actions: ["Backup", "Restore"],
    },
    {
      title: "Storage",
      description: "Manage your storage",
      actions: ["Add Storage", "Remove Storage"],
    },
    {
      title: "Security",
      description: "Monitor and secure your services",
      actions: ["Scan", "Update Security"],
    },
    // Add more services as needed
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Navbara /> {/* Navbar at the top */}
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginLeft: `${drawerWidth}px`,
          p: 3,
          paddingBottom: "60px",
          overflowX: "hidden",
        }}
      >
        <Toolbar />

        {/* Cloud account linking section */}
        <Box
          sx={{
            textAlign: "center",
            marginBottom: 4,
            padding: "10px",
            backgroundColor: "#f4f6f8",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            Link your Cloud account: Choose and authenticate for
          </Typography>
          <Box>
            <Button
              variant="outlined"
              sx={{ marginRight: 2 }}
              onClick={() => (window.location.href = "https://aws.amazon.com/")}
            >
              AWS
            </Button>
            <Button
              variant="outlined"
              sx={{ marginRight: 2 }}
              onClick={() =>
                (window.location.href = "https://azure.microsoft.com/")
              }
            >
              Azure
            </Button>
            <Button
              variant="outlined"
              onClick={() =>
                (window.location.href = "https://cloud.google.com/")
              }
            >
              Google Cloud
            </Button>
          </Box>
        </Box>

        {/* Grid Layout for services */}
        <Grid container spacing={3}>
          {/* Iterate over services to create service boxes */}
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  position: "relative",
                  height: 0,
                  paddingBottom: "100%",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h6">{service.title}</Typography>
                  <Typography>{service.description}</Typography>
                  {/* Map through actions for each service */}
                  <Box sx={{ marginTop: 2 }}>
                    {service.actions.map((action, idx) => (
                      <Button
                        key={idx}
                        variant="contained"
                        sx={{ margin: "5px" }}
                        onClick={() => alert(`${action} action triggered`)}
                      >
                        {action}
                      </Button>
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Row with Chart */}
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              p: 5,
              textAlign: "center",
              overflow: "hidden", // Ensures no overflow for large charts
            }}
          >
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
              Monthly Request
            </Typography>
            <ChartPage />
          </Paper>
        </Grid>
        <Footer />
      </Box>
    </Box>
  );
};
