import React from "react";
import { Navbar } from "../Components/ui/Navbar";
import { ChartsContextProvider } from "../contexts/ChartsContext";

// Charts
import { WordCloud } from "../components/charts/WordCloud";
import { WeekBars } from "../components/charts/WeekBars";
import { VideoBubbles } from "../components/charts/VideoBubbles";
import { ChannelBubbles } from "../components/charts/ChannelBubbles";
import { WorldMap } from "../components/charts/WorldMap";

export const AppScreen = () => {
  return (
    <>
      <Navbar />
      <ChartsContextProvider>
        <WordCloud />
        <WeekBars />
        <VideoBubbles />
        <ChannelBubbles />
        <WorldMap />
      </ChartsContextProvider>
    </>
  );
};
