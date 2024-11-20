import { Button, Typography } from "@mui/material";
import React from "react";
import { Boxes } from "../Layout/Boxes";

export const Storage = () => {
  return (
    <Boxes
      sx={{
        transition: "transform 0.3s ease", // Smooth transition for the Box component
        "&:hover": {
          transform: "scale(1.05)", // Make the Box grow slightly when hovered
        },
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        Storage
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginBottom: 2, color: "text.secondary" }}
      >
        Manage your Cloud Storage
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
        Update
      </Button>
    </Boxes>
  );
};
