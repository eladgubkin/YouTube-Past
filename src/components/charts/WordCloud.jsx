import React, { useContext, useEffect } from "react";
import { ChartsContext } from "../../contexts/ChartsContext";
import { FilesContext } from "../../contexts/FilesContext";
import { parseWordCloudData } from "../../utils/charts/wordCloud/parseWordCloudData";

export const WordCloud = () => {
  const { wordCloudData, setWordCloudData } = useContext(ChartsContext);
  const { searchHistoryData } = useContext(FilesContext);

  useEffect(() => {
    setWordCloudData(parseWordCloudData(searchHistoryData));
  }, []);

  return (
    <>
      <button
        className="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium m-5"
        onClick={() => console.log(wordCloudData)}
      >
        WordCloud
      </button>
    </>
  );
};
