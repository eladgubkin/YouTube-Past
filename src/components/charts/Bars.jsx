import React, { useState, useEffect } from "react";
import EChartsReact from "echarts-for-react";

export const Bars = ({ data, updateData }) => {
  const [option, setOption] = useState({
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      data: ["S", "F", "T", "W", "T", "M", "S"],
    },
    series: {
      name: "2011",
      type: "bar",
      data: [15, 35, 24, 22, 24, 28, 38],
    },
  });

  return <EChartsReact option={option} style={{ width: 375 }} />;
};
