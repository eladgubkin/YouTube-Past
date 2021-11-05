import React, { useState, createContext } from "react";

export const ChartsContext = createContext();

export const ChartsContextProvider = ({ children }) => {
  const [wordCloudData, setWordCloudData] = useState([]);
  const [weekBarChartData, setWeekBarChartData] = useState([]);
  const [channelBubbleData, setChannelBubbleData] = useState([]);
  const [videoSquareData, setVideoSquareData] = useState([]);

  return (
    <ChartsContext.Provider
      value={{
        wordCloudData,
        setWordCloudData,
        weekBarChartData,
        setWeekBarChartData,
        channelBubbleData,
        setChannelBubbleData,
        videoSquareData,
        setVideoSquareData,
      }}
    >
      {children}
    </ChartsContext.Provider>
  );
};
