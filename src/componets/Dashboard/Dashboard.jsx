import React from "react";
import { Box, Grid } from "@mui/material";
import { Sidebar } from "./sidebar";
import { Footer } from "./Footer";
import { Navbara } from "./Navbara";

import { Databasmgmt } from "../services/Databasmgmt";
import { Health } from "../services/Health";
import { Provision } from "../services/Provision";
import { Security } from "../services/Security";
import { ChartPage } from "./ChartPage";
import { Storage } from "../services/Storage";

export const Dashboard = () => {
  const drawerWidth = 240;

  return (
    <Box
      sx={{
        marginTop: 15,
        display: "flex",
        flexDirection: "column",
        height: "100vh", // Fix full-screen height
        overflow: "hidden", // Prevent root scrolling
      }}
    >
      <Navbara />
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginLeft: `${drawerWidth}px`,
          p: 3,
          paddingBottom: 0, // Remove unnecessary padding to prevent overflow
          overflow: "auto", // Allow scrolling inside the main content if necessary
          height: "calc(100vh - 60px)", // Adjust the height to fit the screen (accounting for navbar/footer)
        }}
      >
        {/* Grid Layout for fixed 6 boxes */}
        <Grid container spacing={3}>
          {/* First Row: 3 Service Boxes */}
          <Grid item xs={12} md={4}>
            <Databasmgmt />
          </Grid>
          <Grid item xs={12} md={4}>
            <Provision />
          </Grid>
          {/* Second Row: 3 Boxes (Service or Chart) */}
          <Grid item xs={12} md={4}>
            <Health />
          </Grid>
          <Grid item xs={12} md={4}>
            <Security />
          </Grid>
          <Grid item xs={12} md={4}>
            <Storage />
          </Grid>
          <Grid item xs={12} md={4}>
            <ChartPage />
          </Grid>
        </Grid>

        <Footer />
      </Box>
    </Box>
  );
};
