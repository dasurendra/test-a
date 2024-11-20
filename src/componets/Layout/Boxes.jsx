import React from "react";
import { Paper } from "@mui/material";

export const Boxes = ({ children }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        height: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 2,
        transition: "transform 0.3s ease", // Smooth transition for hover effect
        "&:hover": {
          transform: "scale(1.05)", // Slightly scale up on hover
        },
      }}
    >
      {children}
    </Paper>
  );
};
