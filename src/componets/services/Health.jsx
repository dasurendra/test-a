import React from "react";
import { Boxes } from "../Layout/Boxes";
import { Button, Typography } from "@mui/material";

export const Health = () => {
  return (
    <Boxes>
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        System Health Management
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginBottom: 2, color: "text.secondary" }}
      >
        Check the Health
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
