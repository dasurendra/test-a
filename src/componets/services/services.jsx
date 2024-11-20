// Array of service data with names and actions
import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";

export const ServiceBox = ({ title, description, actions }) => {
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
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <Typography>{description}</Typography>
      <Box sx={{ marginTop: 2 }}>
        {actions.map((action, idx) => (
          <Button
            key={idx}
            variant="contained"
            sx={{ margin: "5px" }}
            onClick={() => alert(`${action} action triggered`)}
          >
            {action}
          </Button>
        ))}
      </Box>
    </Paper>
  );
};
