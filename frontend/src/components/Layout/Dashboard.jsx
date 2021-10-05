import React, { useContext } from "react";
import { StyledDashboard } from "../styles/Dashboard.styled";
import { DataContext } from "../contexts/data";

import {
  StyledHeatmap,
  StyledTimeline,
  StyledWordcloud,
  StyledPiephart,
  StyledBarchart1,
  StyledBarchart2,
  StyledTable,
  StyledInnerGrid,
} from "../styles/Dashboard.styled";

import HeatmapWidget from "../Widgets/HeatmapWidget";
import PieWidget from "../Widgets/PieWidget";
import WordcloudWidget from "../Widgets/WordCloudWidget";
import TimelineWidget from "../Widgets/TimelineWidget";
import VideosWidget from "../Widgets/VideosWidget";
import ChannelsWidget from "../Widgets/ChannelsWidget";
import TableWidget from "../Widgets/TableWidget";

const Dashboard = () => {
  const data = useContext(DataContext);

  return (
    <StyledDashboard>
      <StyledInnerGrid>
        <StyledHeatmap>
          <HeatmapWidget data={data["watchHistory"]} />
        </StyledHeatmap>
        <StyledWordcloud>
          <WordcloudWidget data={data["searchHistory"]} />
        </StyledWordcloud>
        <StyledPiephart>
          <PieWidget data={data["watchHistory"]} />
        </StyledPiephart>
      </StyledInnerGrid>

      <StyledTimeline>
        <TimelineWidget />
      </StyledTimeline>

      <StyledBarchart1>
        <VideosWidget data={data["watchHistory"]} />
      </StyledBarchart1>
      <StyledBarchart2>
        <ChannelsWidget data={data["watchHistory"]} />
      </StyledBarchart2>
      <StyledTable>
        <TableWidget />
      </StyledTable>
    </StyledDashboard>
  );
};

export default Dashboard;
