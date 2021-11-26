import React from "react";
import { Navbar } from "../Components/ui/Navbar";
import { ChartsContextProvider } from "../contexts/ChartsContext";

// Charts
import { WordCloud } from "../components/charts/WordCloud";
import { DayBars } from "../components/charts/DayBars";
import { VideoBubbles } from "../components/charts/VideoBubbles";
import { ChannelBubbles } from "../components/charts/ChannelBubbles";
import { WorldMap } from "../components/charts/WorldMap";
import { AvgVidsPerDayBars } from "../components/charts/new/AvgVidsPerDayBars";
import { VidsPerDayHeatmap } from "../components/charts/new/VidsPerDayHeatmap";

export const AppScreen = () => {
  return (
    <>
      <Navbar />
      <ChartsContextProvider>
        <VidsPerDayHeatmap />
      </ChartsContextProvider>
    </>
  );
};
