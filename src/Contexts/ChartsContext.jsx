import React, { useState, createContext } from "react";

export const ChartsContext = createContext();

export const ChartsContextProvider = ({ children }) => {
  const [heatmapData, setHeatmapData] = useState([]);

  return (
    <ChartsContext.Provider
      value={{
        heatmapData,
        setHeatmapData,
      }}
    >
      {children}
    </ChartsContext.Provider>
  );
};
