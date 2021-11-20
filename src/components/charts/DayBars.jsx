import React, { useContext, useState } from "react";
import { ChartsContext } from "../../contexts/ChartsContext";
import Chart from "react-apexcharts";

export const DayBars = () => {
  const { dayBarsData } = useContext(ChartsContext);

  const [options] = useState({
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },
    yaxis: {
      title: {
        text: "Number of Videos",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => val,
      },
      X: {
        formatter: (val) => val + "Day",
      },
    },
  });

  const [series] = useState([
    {
      name: "Videos Watched",
      data: dayBarsData,
    },
  ]);

  return (
    <>
      <button
        className="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium m-5"
        onClick={() => console.log(dayBarsData)}
      >
        dayBarsData
      </button>
      <Chart options={options} series={series} type="bar" width={400} />;
    </>
  );
};
