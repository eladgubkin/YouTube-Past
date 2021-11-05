import React, { useContext, useEffect } from "react";
import { ChartsContext } from "../../Contexts/ChartsContext";
import { parseVideoSquareData } from "../../utils/charts/parseVideoSquareData";
import { FilesContext } from "../../Contexts/FilesContext";

export const VideoSquare = () => {
  const { videoSquareData, setVideoSquareData } = useContext(ChartsContext);
  const { watchHistoryData } = useContext(FilesContext);

  useEffect(() => {
    setVideoSquareData(parseVideoSquareData(watchHistoryData));
  }, []);

  return (
    <>
      <button
        className="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium m-5"
        onClick={() => console.log(videoSquareData)}
      >
        VideoSquare
      </button>
    </>
  );
};
