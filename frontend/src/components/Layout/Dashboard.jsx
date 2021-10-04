import React, { useContext } from "react";
import { StyledDashboard } from "../styles/Dashboard.styled";
import { DataContext } from "../contexts/data";

import { Grid } from "@mui/material";
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

import PieWidget from "../Widgets/PieWidget";
import WordcloudWidget from "../Widgets/WordCloudWidget";

const Dashboard = () => {
  const data = useContext(DataContext);

  console.log(data);

  return (
    <StyledDashboard>
      <StyledInnerGrid>
        <StyledHeatmap data={data}>
          <PieWidget data={data["watchHistory"]} />
        </StyledHeatmap>
        <StyledWordcloud>
          <WordcloudWidget data={data["searchHistory"]} />
        </StyledWordcloud>
        <StyledPiephart>
          <h1>Piechart</h1>
        </StyledPiephart>
      </StyledInnerGrid>

      <Grid container style={{ padding: 20 }} spacing={2}>
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
      </Grid>
    </StyledDashboard>
  );
};

export default Dashboard;
