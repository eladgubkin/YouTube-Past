import React, { useState, createContext, useContext } from "react";
import { FilesContext } from "./FilesContext";

// DATA PARSING:
import { parseWordCloudData } from "../utils/charts/wordCloud/parseWordCloudData";
import { parseWeekBarsData } from "../utils/charts/weekBars/parseWeekBarsData";
import { parseVideoBubblesData } from "../utils/charts/videoBubbles/parseVideoBubblesData";
import { parseChannelBubblesData } from "../utils/charts/channelBubbles/parseChannelBubblesData";
import { parseWorldMapData } from "../utils/charts/worldMap/parseWorldMapData";

export const ChartsContext = createContext();
export const ChartsContextProvider = ({ children }) => {
  const { watchHistoryData, searchHistoryData, locationHistoryData } = useContext(FilesContext);

  const [wordCloudData] = useState(parseWordCloudData(searchHistoryData));
  const [weekBarsData] = useState(parseWeekBarsData(watchHistoryData));
  const [videoBubblesData] = useState(parseVideoBubblesData(watchHistoryData));
  const [channelBubblesData] = useState(parseChannelBubblesData(watchHistoryData));
  const [WorldMapData] = useState(parseWorldMapData(watchHistoryData, locationHistoryData));

  return (
    <ChartsContext.Provider
      value={{
        wordCloudData,
        weekBarsData,
        videoBubblesData,
        channelBubblesData,
        WorldMapData,
      }}
    >
      {children}
    </ChartsContext.Provider>
  );
};
