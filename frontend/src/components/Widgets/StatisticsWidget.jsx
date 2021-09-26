import React from "react";

const StatisticsWidget = ({ data }) => {
  return (
    <>
      <h1>Statistics Widget</h1>
      <h3>Total Videos: {data["watchHistory"].length}</h3>
      <h3>Total Searches: {data["searchHistory"].length}</h3>
    </>
  );
};

export default StatisticsWidget;
