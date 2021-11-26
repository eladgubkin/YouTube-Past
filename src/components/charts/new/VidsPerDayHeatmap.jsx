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

  const [option, setOption] = useState({
    tooltip: {
      position: "top",
      formatter: (p) => `${p.data[1]} on ${p.data[0]}`,
    },
    visualMap: {
      min: 0,
      max: 100,
      calculable: true,
      orient: "vertical",
      top: "center",
    },
    calendar: [
      {
        orient: "horizontal",
        range: "2021",
      },
    ],
    series: [
      {
        type: "heatmap",
        coordinateSystem: "calendar",
        calendarIndex: 0,
        data: vidsPerDayHeatmapData,
      },
    ],
  });

  return <EChartsReact option={option} />;
  // return <button onClick={() => console.log(vidsPerDayHeatmapData)}>Test</button>;
};
