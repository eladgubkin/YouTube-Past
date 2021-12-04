import React, { useState } from "react";
import EChartsReact from "echarts-for-react";
import moment from "moment";

export const Heatmap = ({ data, updateData }) => {
  const [option, setOption] = useState({
    tooltip: {
      formatter: ({ value }) => {
        return `${value[1]} videos on ${moment(value[0]).format("MMM D, YYYY")}`;
      },
    },
    visualMap: {
      type: "piecewise",
      orient: "horizontal",
      left: "center",
      color: ["blue", "#012A4A", "#013A63", "#014F86", "#468FAF"],
    },
    calendar: {
      cellSize: ["auto", 15],
      range: "2020",
      itemStyle: {
        borderWidth: 1,
        borderColor: "transparent",
      },
      yearLabel: { show: false },
      dayLabel: { show: false },
    },
    series: {
      type: "heatmap",
      coordinateSystem: "calendar",
      data: data["2020"],
    },
  });

  return (
    <>
      <EChartsReact option={option} style={{ width: 750 }} />

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
