import React, { useContext, useEffect } from "react";
import { ChartsContext } from "../../contexts/ChartsContext";
import { FilesContext } from "../../contexts/FilesContext";
import { parseWeekBarsData } from "../../utils/charts/weekBars/parseWeekBarsData";

export const WeekBars = () => {
  const { weekBarsData, setWeekBarsData } = useContext(ChartsContext);
  const { watchHistoryData } = useContext(FilesContext);

  useEffect(() => {
    setWeekBarsData(parseWeekBarsData(watchHistoryData));
  }, []);

  return (
    <>
      <button
        className="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium m-5"
        onClick={() => console.log(weekBarsData)}
      >
        WeekBars
      </button>
    </>
  );
};
