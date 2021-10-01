import React from "react";
import {
  StyledMain,
  StyledHeatmap,
  StyledTimeline,
  StyledWordcloud,
  StyledPiephart,
  StyledBarchart1,
  StyledBarchart2,
  StyledTable,
  StyledInnerGrid,
} from "./Main.styled";

// Widgets
import TableWidget from "./Widgets/TableWidget";
import WordCloudWidget from "./Widgets/WordCloudWidget";
import TimelineWidget from "./Widgets/TimelineWidget";
import VideosWidget from "./Widgets/VideosWidget";
import ChannelsWidget from "./Widgets/ChannelsWidget";
import HeatmapWidget from "./Widgets/HeatmapWidget";
import PieWidget from "./Widgets/PieWidget";

const Main = ({ data }) => {
  const { watchHistory, searchHistory } = data;

  return (
    <StyledMain>
      <StyledInnerGrid>
        <StyledHeatmap>
          <h1>Heatmap</h1>
        </StyledHeatmap>
        <StyledWordcloud>
          <h1>Wordcloud</h1>
        </StyledWordcloud>
        <StyledPiephart>
          <h1>Piechart</h1>
        </StyledPiephart>
      </StyledInnerGrid>

      <StyledTimeline>
        <h1>Timeline</h1>
      </StyledTimeline>

      <StyledBarchart1>
        <h1>Barchart1</h1>
      </StyledBarchart1>
      <StyledBarchart2>
        <h1>Barchart2</h1>
      </StyledBarchart2>
      <StyledTable>
        <h1>Table</h1>
      </StyledTable>

      {/* <Grid container style={{ padding: 20 }} spacing={2}>
        <Grid container item xs={12} md={6} lg={8}>
          <Grid item xs={12} md={12} lg={12} style={{ height: "400px", width: "100%" }}>
            <HeatmapWidget data={watchHistory} />
          </Grid>

          <Grid item xs={12} md={6} lg={6} style={{ height: "400px", width: "100%", marginTop: "20px" }}>
            <WordCloudWidget data={searchHistory} />
          </Grid>

          <Grid item xs={12} md={6} lg={6} style={{ height: "400px", width: "100%", marginTop: 20 }}>
            <PieWidget data={watchHistory} />
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} lg={4} style={{ height: "840px", width: "100%" }}>
          <TimelineWidget data={data} />
        </Grid>

        <Grid item xs={12} md={6} lg={6} style={{ height: "400px", width: "100%" }}>
          <ChannelsWidget data={watchHistory} />
        </Grid>

        <Grid item xs={12} md={6} lg={6} style={{ height: "400px", width: "100%" }}>
          <VideosWidget data={watchHistory} />
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <TableWidget data={watchHistory} />
        </Grid>
      </Grid> */}
    </StyledMain>
  );
};

export default Main;
