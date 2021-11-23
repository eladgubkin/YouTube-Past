import React, { useState } from "react";
import EChartsReact from "echarts-for-react";

export const VidsPerDayHeatmap = () => {
  const [data, setData] = useState([
    ["2015-01-01", 99],
    ["2015-01-02", 50],
    ["2015-01-03", 25],
    ["2015-01-04", 69],
  ]);

  const [option, setOption] = useState({
    title: {
      top: 30,
      left: "center",
      text: "Big Title Here",
    },
    tooltip: {
      position: "top",
      formatter: function (p) {
        return "Lol";
      },
    },
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
      cellSize: ["auto", 13],
      range: "2015",
      itemStyle: {
        borderWidth: 0.5,
      },
      yearLabel: { show: false },
    },
    series: {
      type: "heatmap",
      coordinateSystem: "calendar",
      data: data,
    },
  });
  return <EChartsReact option={option} />;
};
