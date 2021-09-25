import React, { useState } from "react";
import Box from "@mui/material/Box";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Container from "./Container";
import { CssBaseline } from "@mui/material";

const drawerWidth = 300;

const Layout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // const container = window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <CssBaseline />
      <Header drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
      <Sidebar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      <Container mobileOpen={mobileOpen} />
    </Box>
  );
};

export default Layout;
