import React, { useContext, useState } from "react";
import { ChartsContext } from "../../contexts/ChartsContext";

export const DayBars = () => {
  const { dayBarsData } = useContext(ChartsContext);

  return (
    <>
      <button
        className="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium m-5"
        onClick={() => console.log(dayBarsData)}
      >
        dayBarsData
      </button>
    </>
  );
};
