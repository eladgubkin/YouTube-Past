import React, { useState, createContext } from "react";

export const ChartsContext = createContext();

export const ChartsContextProvider = ({ children }) => {
  const [wordCloudData, setWordCloudData] = useState([]);
  const [weekBarsData, setWeekBarsData] = useState([]);
  const [videoBubblesData, setVideoBubblesData] = useState([]);
  const [channelBubblesData, setChannelBubblesData] = useState([]);
  const [WorldMapData, setWorldMapData] = useState([]);

  return (
    <ChartsContext.Provider
      value={{
        wordCloudData,
        setWordCloudData,
        weekBarsData,
        setWeekBarsData,
        videoBubblesData,
        setVideoBubblesData,
        channelBubblesData,
        setChannelBubblesData,
        WorldMapData,
        setWorldMapData,
      }}
    >
      {children}
    </ChartsContext.Provider>
  );
};
