import React, { useContext } from "react";
import { DataContext } from "../../Contexts/DataContext";

export const Main = () => {
  const { watchHistoryData, searchHistoryData } = useContext(DataContext);

  return (
    <>
      <h1>Main</h1>
      <button onClick={() => console.log(watchHistoryData)}>
        watchHistoryData
      </button>
      <button onClick={() => console.log(searchHistoryData)}>
        searchHistoryData
      </button>
    </>
  );
};
