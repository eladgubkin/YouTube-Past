import React, { useContext, useEffect } from "react";
import { ChartsContext } from "../../../contexts/ChartsContext";
import { FilesContext } from "../../../contexts/FilesContext";
import { parseDayBarsData } from "../../../utils/charts/dayBars/parseDayBarsData";

export const AvgVidsPerDayBars = () => {
  const { dayBarsData, setDayBarsData } = useContext(ChartsContext);
  const { watchHistoryData } = useContext(FilesContext);

  useEffect(() => {
    setDayBarsData(parseDayBarsData(watchHistoryData));
  }, []);

  return (
    <div>
      <button
        className="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium m-5"
        onClick={() => console.log(dayBarsData)}
      >
        dayBarsData
      </button>
    </div>
  );
};
