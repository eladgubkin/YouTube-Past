import React, { useState } from "react";
import EChartsReact from "echarts-for-react";

export const Heatmap = ({ data, updateData }) => {
  const [option, setOption] = useState({
    title: {
      top: 30,
      left: "center",
      text: "Daily Videos Count",
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
      range: "2020",
      itemStyle: {
        borderWidth: 0.5,
      },
      yearLabel: { show: false },
    },
    series: {
      type: "heatmap",
      coordinateSystem: "calendar",
      data: data["2020"],
    },
  });

  return (
    <>
      <EChartsReact
        option={option}
        style={{
          width: 900,
        }}
      />

      {Object.keys(data).map((year, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              setOption((prevOption) => ({
                ...prevOption,
                calendar: {
                  ...prevOption.calendar,
                  range: year,
                },
                series: {
                  ...prevOption.series,
                  data: data[year],
                },
              }));
            }}
            className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          >
            {year}
          </button>
        );
      })}
    </>
  );
};
