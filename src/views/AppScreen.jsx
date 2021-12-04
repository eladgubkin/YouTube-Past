import React, { useState, useContext } from "react";
import { Navbar } from "../Components/ui/Navbar";
import { FilesContext } from "../contexts/FilesContext";

// Charts
import { Heatmap } from "../components/charts/Heatmap";
import { Scatter } from "../components/charts/Scatter";
import { Pie } from "../components/charts/Pie";
import { Bars } from "../components/charts/Bars";

// Chart Parsers
import { parseHeatmap } from "../utils/charts/parseHeatmap";
import { parseBars } from "../utils/charts/parseBars";

export const AppScreen = () => {
  const { watchHistoryData } = useContext(FilesContext);

  const [heatmapData, setHeatmapData] = useState(parseHeatmap(watchHistoryData));
  const [BarsData, setBarsData] = useState(parseBars(watchHistoryData));

  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-10">
        <section>
          <Heatmap data={heatmapData} updateData={setHeatmapData} />
        </section>
        <section className="flex flex-row">
          <Scatter />
          <Bars data={BarsData} updateData={setBarsData} />
          <Pie />
        </section>

        <button onClick={() => console.log(parseBars(watchHistoryData))}>Data</button>
      </main>
    </>
  );
};
