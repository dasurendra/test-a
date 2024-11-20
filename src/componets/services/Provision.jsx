import { Button, Typography } from "@mui/material";
import React from "react";
import { Boxes } from "../Layout/Boxes";

export const Provision = () => {
  return (
    <Boxes>
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        Provision Services
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginBottom: 2, color: "text.secondary" }}
      >
        Manage your Services
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
        update
      </Button>
    </Boxes>
  );
};
