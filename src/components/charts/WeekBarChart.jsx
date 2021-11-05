import React, { useContext, useEffect } from "react";
import { ChartsContext } from "../../Contexts/ChartsContext";
import { FilesContext } from "../../Contexts/FilesContext";
import { parseWeekBarChartData } from "../../utils/charts/parseWeekBarChartData";

export const WeekBarChart = () => {
  const { weekBarChartData, setWeekBarChartData } = useContext(ChartsContext);
  const { watchHistoryData } = useContext(FilesContext);

  useEffect(() => {
    setWeekBarChartData(parseWeekBarChartData(watchHistoryData));
  }, []);

  return (
    <>
      <button
        className="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium m-5"
        onClick={() => console.log(weekBarChartData)}
      >
        WeekBarChart
      </button>
    </>
  );
};
