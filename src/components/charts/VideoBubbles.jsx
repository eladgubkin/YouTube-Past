import React, { useContext, useEffect } from "react";
import { ChartsContext } from "../../contexts/ChartsContext";
import { FilesContext } from "../../contexts/FilesContext";
import { parseVideoBubblesData } from "../../utils/charts/videoBubbles/parseVideoBubblesData";

export const VideoBubbles = () => {
  const { videoBubblesData, setVideoBubblesData } = useContext(ChartsContext);
  const { watchHistoryData } = useContext(FilesContext);

  useEffect(() => {
    setVideoBubblesData(parseVideoBubblesData(watchHistoryData));
  }, []);

  return (
    <>
      <button
        className="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium m-5"
        onClick={() => console.log(videoBubblesData)}
      >
        VideoBubbles
      </button>
    </>
  );
};
