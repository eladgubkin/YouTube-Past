import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import ytLogo from "../yt-logo.png";
import ytMusicLogo from "../yt-music-logo.png";
import List from "@mui/material/List";
import { ListItem } from "@mui/material";

const Sidebar = ({ drawerWidth, handleDrawerToggle, mobileOpen }) => {
  const drawer = (
    <aside style={{ height: "100%", fontSize: "0.9em" }}>
      <Toolbar >Toolbar</Toolbar>
    </aside>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { lg: drawerWidth },
        flexShrink: { lg: 0 },
      }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { md: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            background: "#1B2845",
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", lg: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            background: "#1B2845",
          },
        }}
        open={true}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
