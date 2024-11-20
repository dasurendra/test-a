import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import StorageIcon from "@mui/icons-material/Storage"; // For "Provisioning"
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck"; // For "Network"
import SecurityIcon from "@mui/icons-material/Security"; // For "Security"
import ComputerIcon from "@mui/icons-material/Computer"; // For "Compute"
import CloudIcon from "@mui/icons-material/Cloud"; // For "Serverless"
import DockerIcon from "@mui/icons-material/Apps"; // For "Docker with Image"
import RedirectIcon from "@mui/icons-material/ArrowForwardIos"; // For "Redirection"
import AnalyticsIcon from "@mui/icons-material/Analytics"; // For "Metrics"

export const Sidebar = () => {
  const drawerWidth = 240;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <List>
        {/* Home Link */}
        <ListItem>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        {/* Service Links */}
        <ListItem>
          <ListItemIcon>
            <StorageIcon />
          </ListItemIcon>
          <ListItemText primary="Provisioning" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <NetworkCheckIcon />
          </ListItemIcon>
          <ListItemText primary="Network" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SecurityIcon />
          </ListItemIcon>
          <ListItemText primary="Security" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="Compute" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CloudIcon />
          </ListItemIcon>
          <ListItemText primary="Serverless" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DockerIcon />
          </ListItemIcon>
          <ListItemText primary="Docker with Image" />
        </ListItem>

        {/* Metrics */}
        <ListItem>
          <ListItemIcon>
            <AnalyticsIcon />
          </ListItemIcon>
          <ListItemText primary="Metrics" />
        </ListItem>
      </List>

      {/* Footer Section */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          width: drawerWidth,
          p: 2,
        }}
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <AdminPanelSettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Management" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Username" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};
