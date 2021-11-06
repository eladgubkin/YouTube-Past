import React from "react";
import { Navbar } from "../Components/ui/Navbar";
import { ChartsContextProvider } from "../Contexts/ChartsContext";

// Charts
import { WordCloud } from "../components/charts/WordCloud";
import { WeekBarChart } from "../components/charts/WeekBarChart";
import { VideoSquare } from "../components/charts/VideoSquare";
import { ChannelBubble } from "../components/charts/ChannelBubble";
import { WorldMap } from "../components/charts/WorldMap";

export const AppScreen = () => {
  return (
    <>
      <Navbar />
      <ChartsContextProvider>
        <WordCloud />
        <WeekBarChart />
        <VideoSquare />
        <ChannelBubble />
        <WorldMap />
      </ChartsContextProvider>
    </>
  );
};
