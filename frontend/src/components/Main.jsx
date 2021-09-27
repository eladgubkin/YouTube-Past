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
import PieWidget from "./Widgets/PieWidget";

const Main = ({ data }) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, textAlign: "center" }}>
      <Toolbar />

      <Grid container style={{ padding: 20 }} spacing={2}>
        <Grid container item xs={12} md={6} lg={8}>
          <Grid item xs={12} md={12} lg={12} style={{ height: "400px", width: "100%" }}>
            <HeatmapWidget data={data["watchHistory"]} />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            style={{
              height: "400px",
              width: "100%",
              marginTop: "20px",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
          >
            <WordCloudWidget data={data["searchHistory"]} />
          </Grid>
          <Grid item xs={12} md={6} lg={6} style={{ height: "400px", width: "100%", marginTop: 20 }}>
            <PieWidget data={data["watchHistory"]} />
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} lg={4} style={{ height: "840px", width: "100%" }}>
          <TimelineWidget data={data} />
        </Grid>

        <Grid item xs={12} md={6} lg={6} style={{ height: "400px", width: "100%" }}>
          <ChannelsWidget data={data["watchHistory"]} />
        </Grid>

        <Grid item xs={12} md={6} lg={6} style={{ height: "400px", width: "100%" }}>
          <VideosWidget data={data["watchHistory"]} />
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <TableWidget data={data["watchHistory"]} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
