import React from "react";
import { Box, Grid, Paper, Typography, Toolbar } from "@mui/material";
import { Sidebar } from "./sidebar";
import { Footer } from "./Footer";
import { Navbara } from "./Navbara";
import { ChartPage } from "./ChartPage";

export const Dashboard = () => {
  const drawerWidth = 240;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        overflowX: "hidden", // Prevent horizontal scrolling
      }}
    >
      <Navbara /> {/* Navbar at the top */}
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginLeft: `${drawerWidth}px`, // Adjust for sidebar width
          p: 3,
          paddingBottom: "60px",
          overflowX: "hidden", // Prevent overflow in main content
        }}
      >
        <Toolbar />

        {/* Grid Layout */}
        <Grid container spacing={3}>
          {/* Top Row with 3 Square Boxes */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                position: "relative",
                height: 0,
                paddingBottom: "100%", // Maintain square aspect ratio
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
                <Typography variant="h6">Box 1</Typography>
                <Typography>Content for Box 1</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
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
                <Typography variant="h6">Box 2</Typography>
                <Typography>Content for Box 2</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
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
                <Typography variant="h6">Box 3</Typography>
                <Typography>Content for Box 3</Typography>
              </Box>
            </Paper>
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
        </Grid>
        <Footer />
      </Box>
    </Box>
  );
};
