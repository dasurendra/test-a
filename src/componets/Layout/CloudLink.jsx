import React from "react";
import { Box, Button, Typography } from "@mui/material";

const CloudAccountLinking = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        marginBottom: 4,
        padding: "10px",
        //backgroundColor: "#f4f6f8",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        Link your Cloud account: Choose and authenticate for
      </Typography>
      <Box>
        <Button
          variant="outlined"
          sx={{ marginRight: 2 }}
          onClick={() => (window.location.href = "https://aws.amazon.com/")}
        >
          AWS
        </Button>
        <Button
          variant="outlined"
          sx={{ marginRight: 2 }}
          onClick={() =>
            (window.location.href = "https://azure.microsoft.com/")
          }
        >
          Azure
        </Button>
        <Button
          variant="outlined"
          onClick={() => (window.location.href = "https://cloud.google.com/")}
        >
          Google Cloud
        </Button>
      </Box>
    </Box>
  );
};

export default CloudAccountLinking;
