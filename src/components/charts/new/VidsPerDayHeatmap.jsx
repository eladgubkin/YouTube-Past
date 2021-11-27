import React, { useState, useContext, useEffect } from "react";
import { ChartsContext } from "../../../contexts/ChartsContext";
import { FilesContext } from "../../../contexts/FilesContext";
import { parseVidsPerDayHeatmap } from "../../../utils/charts/new/parseVidsPerDayHeatmap";
import EChartsReact from "echarts-for-react";

export const VidsPerDayHeatmap = () => {
  const { watchHistoryData } = useContext(FilesContext);
  const { vidsPerDayHeatmapData, setVidsPerDayHeatmapData } = useContext(ChartsContext);

  useEffect(() => {
    setVidsPerDayHeatmapData(parseVidsPerDayHeatmap(watchHistoryData));
  }, []);

  const [year, setYear] = useState("2020");

  const [option, setOption] = useState({
    title: {
      top: 30,
      left: "center",
      text: "Daily Step Count",
    },
    tooltip: {},
    visualMap: {
      min: 0,
      max: 100,
      type: "piecewise",
      orient: "horizontal",
      left: "center",
      top: 65,
    },
    calendar: {
      top: 120,
      left: 30,
      right: 30,
      cellSize: ["auto", 15],
      range: year,
      itemStyle: {
        borderWidth: 0.5,
      },
      yearLabel: { show: false },
    },
    series: {
      type: "heatmap",
      coordinateSystem: "calendar",
      data: vidsPerDayHeatmapData[year],
    },
  });

  return (
    <>
      <EChartsReact
        option={option}
        style={{
          height: "100%",
          width: 900,
        }}
      />

      <button onClick={() => setYear("2019")}>Change Year</button>
    </>
  );
};
