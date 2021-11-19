import React, { useContext, useState } from "react";
import { ChartsContext } from "../../contexts/ChartsContext";
import Chart from "react-apexcharts";

export const WeekBars = () => {
  const { weekBarsData } = useContext(ChartsContext);

  // const [options, setOptions] = useState({
  //   title: {
  //     text: "Average Watched Videos Per Day",
  //   },
  //   xaxis: {
  //     categories: [
  //       "Sunday",
  //       "Monday",
  //       "Tuesday",
  //       "Wednesday",
  //       "Thursday",
  //       "Friday",
  //       "Saturday",
  //     ],
  //   },
  //   yaxis: {
  //     categories: ["asd", "lol"],
  //   },
  // });

  // const [series, setSeries] = useState([
  //   {
  //     name: "2019",
  //     data: [1952, 1860, 1817, 1871, 1712, 1716, 1636],
  //   },
  //   {
  //     name: "2020",
  //     data: [1492, 884, 1048, 1111, 1262, 1703, 2049],
  //   },
  //   {
  //     name: "2021",
  //     data: [1735, 1109, 1041, 890, 1138, 1640, 2074],
  //   },
  // ]);

  // return <Chart options={options} series={series} type="radar" height={350} />;

  return (
    <button
      className="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium m-5"
      onClick={() => console.log(weekBarsData)}
    >
      weekBarsData
    </button>
  );
};
