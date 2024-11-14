// Footer.js
import React from "react";
import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        py: 2,
        backgroundColor: (theme) => theme.palette.mode === "light",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} Surendra
      </Typography>
    </Box>
  );
};
