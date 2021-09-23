import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Graph from "./Graph";
import { Grid } from "@mui/material";

const Container = ({ data }) => {
  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Toolbar />

      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          {/* <Graph data={data} /> */}
          <h1>Lol</h1>
        </Grid>
        <Grid item xs={12} md={6}>
          <h1>Lol</h1>
        </Grid>
        <Grid item xs={12} md={4}>
          <h1>Lol</h1>
        </Grid>
        <Grid item xs={12} md={8}>
          <code>{JSON.stringify(data, null, 2)}</code>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Container;
