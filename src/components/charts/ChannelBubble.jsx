import React, { useContext, useEffect } from "react";
import { ChartsContext } from "../../Contexts/ChartsContext";
import { FilesContext } from "../../Contexts/FilesContext";
import { parseChannelBubbleData } from "../../utils/charts/parseChannelBubbleData";

export const ChannelBubble = () => {
  const { channelBubbleData, setChannelBubbleData } = useContext(ChartsContext);
  const { watchHistoryData } = useContext(FilesContext);

  useEffect(() => {
    setChannelBubbleData(parseChannelBubbleData(watchHistoryData));
  }, []);

  return (
    <>
      <button
        className="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium m-5"
        onClick={() => console.log(channelBubbleData)}
      >
        ChannelBubble
      </button>
    </>
  );
};
