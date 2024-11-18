import React from "react";
import { Box, Grid, Paper, Typography, Toolbar } from "@mui/material";
import { Sidebar } from "./sidebar";
import { Footer } from "./Footer";
import { Navbara } from "./Navbara";
import { ChartPage } from "./ChartPage";

export const Dashboard = () => {
  const drawerWidth = 240;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbara /> {/* Navbar at the top */}
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginLeft: `${drawerWidth}px`, // Adjust for sidebar width
          p: 3,
          paddingBottom: "60px",
        }}
      >
        <Toolbar />

        {/* Grid Layout */}
        <Grid container spacing={3}>
          {/* Top Row with 3 Small Boxes */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h6">Box 1</Typography>
              <Typography>Content for Box 1</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h6">Box 2</Typography>
              <Typography>Content for Box 2</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h6">Box 3</Typography>
              <Typography>Content for Box 3</Typography>
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
