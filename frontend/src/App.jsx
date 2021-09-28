import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { CssBaseline } from "@mui/material";

const App = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [drawerWidth] = useState(300);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    fetch("http://127.0.0.1:5000/", { method: "POST" })
      .then((res) => res.json())
      .then((res) => {
        setData({
          watchHistory: JSON.parse(res.watchHistory),
          searchHistory: JSON.parse(res.searchHistory),
        });
      });
  }, []);

  if (Object.keys(data).length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Box sx={{ display: "flex", height: "100%" }}>
        {/* <CssBaseline /> */}
        <Header drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
        <Sidebar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
        <Main mobileOpen={mobileOpen} data={data} />
      </Box>
    );
  }
};

export default App;
