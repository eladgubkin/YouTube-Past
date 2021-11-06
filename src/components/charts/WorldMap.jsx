import React, { useContext, useEffect } from "react";
import { ChartsContext } from "../../contexts/ChartsContext";
import { FilesContext } from "../../contexts/FilesContext";
import { parseWorldMapData } from "../../utils/charts/worldMap/parseWorldMapData";

export const WorldMap = () => {
  const { WorldMapData, setWorldMapData } = useContext(ChartsContext);
  const { watchHistoryData, locationHistoryData } = useContext(FilesContext);

  useEffect(() => {
    setWorldMapData(parseWorldMapData(watchHistoryData, locationHistoryData));
  }, []);

  return (
    <>
      <button
        className="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium m-5"
        onClick={() => console.log(WorldMapData)}
      >
        WorldMap
      </button>
    </>
  );
};
