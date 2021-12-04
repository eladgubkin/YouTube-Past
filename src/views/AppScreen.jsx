import React, { useState, useContext } from "react";
import { Navbar } from "../Components/ui/Navbar";
import { FilesContext } from "../contexts/FilesContext";
import { parseHeatmap } from "../utils/charts/heatmap/parseHeatmap";

// Charts
import { Heatmap } from "../components/charts/Heatmap";
import { Scatter } from "../components/charts/Scatter";
import { Pie } from "../components/charts/Pie";

export const AppScreen = () => {
  const { watchHistoryData } = useContext(FilesContext);
  const [heatmapData, setHeatmapData] = useState(parseHeatmap(watchHistoryData));

  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-10">
        <section>
          <Heatmap data={heatmapData} updateData={setHeatmapData} />
        </section>
        <section className="flex flex-row">
          <Scatter />
          <Pie />
        </section>
      </main>
    </>
  );
};
