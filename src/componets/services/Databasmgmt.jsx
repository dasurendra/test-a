import React from "react";
import { Typography, Button } from "@mui/material";
import { Boxes } from "../Layout/Boxes";

export const Databasmgmt = () => {
  return (
    <Boxes>
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        Database Management
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginBottom: 2, color: "text.secondary" }}
      >
        Handle your databases
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          transition: "transform 0.3s ease", // Smooth transition for Button scaling
          "&:hover": {
            transform: "scale(1.1)", // Make the Button grow slightly when hovered
          },
        }}
      >
        Manage Now
      </Button>
    </Boxes>
  );
};
