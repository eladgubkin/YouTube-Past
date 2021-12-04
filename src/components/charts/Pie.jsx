import React, { useState } from "react";
import EChartsReact from "echarts-for-react";

export const Pie = () => {
  const [option, setOption] = useState({
    polar: {
      radius: [30, "90%"],
    },
    angleAxis: {
      max: 80,
      startAngle: 75,
    },
    radiusAxis: {
      type: "category",
      data: ["5+", 4, 3, 2, 1],
    },
    tooltip: {},
    series: {
      type: "bar",
      data: [9, 3, 9, 18, 60],
      coordinateSystem: "polar",
      label: {
        show: false,
        position: "middle",
        formatter: "{b}: {c}",
      },
    },
  });
  return <EChartsReact option={option} style={{ width: 375 }} />;
};
