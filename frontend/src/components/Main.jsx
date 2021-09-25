import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Grid } from "@mui/material";

// Widgets
import TableWidget from "./Widgets/TableWidget";
import WordCloudWidget from "./Widgets/WordCloudWidget";
import TimelineWidget from "./Widgets/TimelineWidget";
import VideosWidget from "./Widgets/VideosWidget";
import ChannelsWidget from "./Widgets/ChannelsWidget";
import HeatmapWidget from "./Widgets/HeatmapWidget";
import StatisticsWidget from "./Widgets/StatisticsWidget";

const Main = ({ data }) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, textAlign: "center" }}>
      <Toolbar />

      <Grid container>
        <Grid container xs={12} md={6} lg={8}>
          <Grid item xs={12} md={12} lg={12} style={{ border: "1px solid red", height: "400px" }}>
            <TableWidget />
          </Grid>

          <Grid item xs={12} md={6} lg={6} style={{ border: "1px solid red", height: "400px" }}>
            <WordCloudWidget data={data} />
          </Grid>
          <Grid item xs={12} md={6} lg={6} style={{ border: "1px solid red", height: "400px" }}>
            <StatisticsWidget />
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} lg={4} style={{ border: "1px solid red", height: "800px" }}>
          <TimelineWidget />
        </Grid>

        <Grid item xs={12} md={6} lg={6} style={{ border: "1px solid red", height: "400px" }}>
          <ChannelsWidget />
        </Grid>

        <Grid item xs={12} md={6} lg={6} style={{ border: "1px solid red", height: "400px" }}>
          <VideosWidget />
        </Grid>

        <Grid item xs={12} md={12} lg={12} style={{ border: "1px solid red", height: "400px" }}>
          <HeatmapWidget />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
