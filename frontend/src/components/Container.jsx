import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Graph from "./Graph";

const Container = ({ data }) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }} id="Container">
      <Toolbar />
      <Graph data={data} />
      <code>{JSON.stringify(data, null, 2)}</code>
    </Box>
  );
};

export default Container;
