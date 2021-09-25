import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Grid } from "@mui/material";

const Container = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, textAlign: "center" }}>
      <Toolbar />

      <Grid container spacing={2}>
        <Grid item xs={12} md={8} lg={8}>
          <h1>Lol</h1>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <h1>Lol</h1>
        </Grid>
        <Grid item xs={12} md={4} lg={12}>
          <h1>Lol</h1>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <h1>Lol</h1>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <h1>Lol</h1>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Container;
