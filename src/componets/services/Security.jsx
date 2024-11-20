import React from "react";
import { Boxes } from "../Layout/Boxes";
import { Button, Typography } from "@mui/material";

export const Security = () => {
  return (
    <Boxes>
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        Security
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginBottom: 2, color: "text.secondary" }}
      >
        Security Monitor and secure your services
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          transition: "transform 0.3s ease", // Smooth transition for transform
          "&:hover": {
            transform: "scale(1.1)", // Make the button grow when hovered
          },
        }}
      >
        Scan
      </Button>
    </Boxes>
  );
};
