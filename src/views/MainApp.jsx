import React from "react";
import { Navbar } from "../Components/ui/Navbar";
import { ChartsContextProvider } from "../Contexts/ChartsContext";

// Charts
import { WordCloud } from "../components/charts/WordCloud";
import { WeekBarChart } from "../components/charts/WeekBarChart";
import { VideoSquare } from "../components/charts/VideoSquare";
import { ChannelBubble } from "../components/charts/ChannelBubble";

export const MainApp = () => {
  return (
    <>
      <Navbar />
      <ChartsContextProvider>
        <WordCloud />
        <WeekBarChart />
        <VideoSquare />
        <ChannelBubble />
      </ChartsContextProvider>
    </>
  );
};
