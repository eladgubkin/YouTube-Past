import React, { useState } from "react";
import EChartsReact from "echarts-for-react";

export const Pie = () => {
  const [option, setOption] = useState({
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },

    series: {
      type: "pie",
      radius: [20, 140],
      center: ["25%", "50%"],
      roseType: "area",
      itemStyle: {
        borderRadius: 5,
      },
      label: {
        show: true,
      },
      emphasis: {
        label: {
          show: true,
        },
      },
      data: [
        { value: 63, name: "1" },
        { value: 18, name: "2" },
        { value: 9, name: "3" },
        { value: 4, name: "4" },
        { value: 6, name: "More than 5" },
      ],
    },
  });
  return <EChartsReact option={option} style={{ width: 750 }} />;
};
