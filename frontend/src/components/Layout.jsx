import React, { useState } from "react";
import Box from "@mui/material/Box";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Container from "./Container";
import { CssBaseline } from "@mui/material";

const drawerWidth = 240;

const Layout = () => {
  const [data, setData] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const container = window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
      <Sidebar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        setData={setData}
      />
      <Container mobileOpen={mobileOpen} container={container} data={data} />
    </Box>
  );
};

export default Layout;
