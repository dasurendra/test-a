// Navbar.js
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
  AccountCircle,
} from "@mui/icons-material";
import { alpha } from "@mui/system";

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
        backgroundColor: "#fff", // Dark background color (you can choose any color)
        boxShadow: "none", // Remove shadow for a flatter look
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, color: "#fff" }}
        ></Typography>

        {/* Search Bar */}
        <Box
          sx={{
            display: "flex", // Ensures the search box is shown
            alignItems: "center",
            borderRadius: 1,
            backgroundColor: "#1976d2", // Blue background for better visibility
            "&:hover": {
              backgroundColor: "#1565c0", // Slightly darker on hover
            },
            marginRight: 2,
            padding: "0 10px", // Padding inside the search box
            width: "250px", // Width of the search box
          }}
        >
          <SearchIcon sx={{ color: "#fff" }} />
          <InputBase
            sx={{
              color: "#fff",
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
            {/* White notification icon */}
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
