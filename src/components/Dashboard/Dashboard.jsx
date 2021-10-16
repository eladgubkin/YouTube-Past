import React, { useContext } from "react";
import { DataContext } from "../../Contexts/DataContext";
import _ from "lodash";

export const Dashboard = () => {
  const { watchHistoryData, searchHistoryData } = useContext(DataContext);

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={() => console.log(watchHistoryData)}>watchHistoryData</button>
      <button onClick={() => console.log(searchHistoryData)}>searchHistoryData</button>
    </>
  );
};
