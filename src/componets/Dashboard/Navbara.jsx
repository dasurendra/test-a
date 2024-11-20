import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Badge,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";

export const Navbara = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget); // Open the menu when notifications are clicked
  };

  const handleNotificationClose = () => {
    setAnchorEl(null); // Close the notification menu
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // Add any search logic here
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#f5f5f5", // Light gray background
        boxShadow: "none", // Remove shadow for a flatter, cleaner look
        color: "#000", // Text color as black for better visibility
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, textAlign: "center", color: "#000" }} // Dark text color for the title
        >
          {" "}
        </Typography>

        {/* Search Bar */}
        <Box
          sx={{
            display: "flex", // Ensures the search box is shown
            alignItems: "center",
            borderRadius: 1,
            backgroundColor: "#e0e0e0", // Light gray background for the search box
            "&:hover": {
              backgroundColor: "#d5d5d5", // Darker gray on hover for search box
            },
            marginRight: 2,
            padding: "0 10px", // Padding inside the search box
            width: "250px", // Width of the search box
          }}
        >
          <SearchIcon sx={{ color: "#000" }} /> {/* Dark search icon */}
          <InputBase
            sx={{
              color: "#000", // Dark text color for the input field
              marginLeft: 1, // Space between the icon and text
              width: "100%",
            }}
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Box>

        {/* Notification Icon */}
        <IconButton color="inherit" onClick={handleNotificationClick}>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon sx={{ color: "#1976d2" }} />{" "}
            {/* Blue notification icon */}
          </Badge>
        </IconButton>
      </Toolbar>

      {/* Notification Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleNotificationClose}
      >
        <MenuItem onClick={handleNotificationClose}>Notification 1</MenuItem>
        <MenuItem onClick={handleNotificationClose}>Notification 2</MenuItem>
        <MenuItem onClick={handleNotificationClose}>Notification 3</MenuItem>
      </Menu>
    </AppBar>
  );
};
