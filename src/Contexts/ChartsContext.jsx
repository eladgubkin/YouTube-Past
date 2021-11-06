import React, { useState, createContext } from "react";

export const ChartsContext = createContext();

export const ChartsContextProvider = ({ children }) => {
  const [wordCloudData, setWordCloudData] = useState([]);
  const [weekBarChartData, setWeekBarChartData] = useState([]);
  const [videoSquareData, setVideoSquareData] = useState([]);
  const [channelBubbleData, setChannelBubbleData] = useState([]);
  const [WorldMapData, setWorldMapData] = useState([]);

  return (
    <ChartsContext.Provider
      value={{
        wordCloudData,
        setWordCloudData,
        weekBarChartData,
        setWeekBarChartData,
        videoSquareData,
        setVideoSquareData,
        channelBubbleData,
        setChannelBubbleData,
        WorldMapData,
        setWorldMapData,
      }}
    >
      {children}
    </ChartsContext.Provider>
  );
};
