import React, { useState, useContext } from "react";
import { Navbar } from "../Components/ui/Navbar";
import { FilesContext } from "../contexts/FilesContext";

// Charts
import { Heatmap } from "../components/charts/Heatmap";
import { Scatter } from "../components/charts/Scatter";
import { Pie } from "../components/charts/Pie";
import { Bars } from "../components/charts/Bars";
import { ChannelBubbles } from "../components/charts/ChannelBubbles";

// Chart Parsers
import { parseHeatmap } from "../utils/charts/parseHeatmap";
import { parseBars } from "../utils/charts/parseBars";
import { parseBubbles } from "../utils/charts/parseBubbles";

export const AppScreen = () => {
  const { watchHistoryData } = useContext(FilesContext);

  const [heatmapData, setHeatmapData] = useState(parseHeatmap(watchHistoryData));
  const [barsData, setBarsData] = useState(parseBars(watchHistoryData));
  const [bubblesData, setBubblesData] = useState(parseBubbles(watchHistoryData));

  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-10">
        <section>
          <Heatmap data={heatmapData} updateData={setHeatmapData} />
        </section>
        <section className="flex flex-row">
          <Scatter />
          <Bars data={barsData} updateData={setBarsData} />
          <Pie />
        </section>
        <ChannelBubbles data={bubblesData} />
      </main>
    </>
  );
};
