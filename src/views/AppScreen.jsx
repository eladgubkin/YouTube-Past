import React, { useState, useContext, useEffect } from "react";
import { Navbar } from "../Components/ui/Navbar";
import { FilesContext } from "../contexts/FilesContext";
import { parseHeatmap } from "../utils/charts/heatmap/parseHeatmap";

// Charts
import { Heatmap } from "../components/charts/Heatmap";

export const AppScreen = () => {
  const { watchHistoryData } = useContext(FilesContext);
  const [heatmapData, setHeatmapData] = useState(parseHeatmap(watchHistoryData));

  return (
    <>
      <Navbar />
      <Heatmap data={heatmapData} updateData={setHeatmapData} />
    </>
  );
};
