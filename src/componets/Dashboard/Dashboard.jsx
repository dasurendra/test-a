// Dashboard.js
import React from "react";
import { Box, Grid, Paper, Typography, Toolbar } from "@mui/material";
import { Sidebar } from "./sidebar";
import { Footer } from "./Footer";
import { Navbara } from "./Navbara";

export const Dashboard = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbara /> {/* Place Navbar at the top */}
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, paddingBottom: "60px" }}>
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

          {/* Bottom Row with 1 Large Box */}
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 5, textAlign: "center" }}>
              <Typography variant="h5">Large Box</Typography>
              <Typography>Content for the large box goes here.</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Footer />
      </Box>
    </Box>
  );
};
