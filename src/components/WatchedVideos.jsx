import React, { useContext, useEffect } from "react";
import { DataContext } from "../Contexts/DataContext";
import { countByVideoId, countByChannelId } from "../utils/countById";

export const WatchedVideos = () => {
  const { watchHistoryData } = useContext(DataContext);

  return (
    <>
      <button
        className="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium m-5"
        onClick={() => console.log(watchHistoryData)}
      >
        Watch History
      </button>

      <button
        className="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium m-5"
        onClick={() => console.log(countByVideoId(watchHistoryData.fileContent))}
      >
        Count By Video
      </button>

      <button
        className="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium m-5"
        onClick={() => console.log(countByChannelId(watchHistoryData.fileContent))}
      >
        Count By Channel
      </button>

      <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4 text-center">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
    </>
  );
};
