import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { DataContext } from "./Contexts/DataContext";
import "tailwindcss/tailwind.css";
import _ from "lodash";

// Views
import { Landing } from "./views/Landing";
import { Import } from "./views/Import";

export const App = () => {
  const [watchHistoryData, setWatchHistoryData] = useState([]);
  const [searchHistoryData, setSearchHistoryData] = useState([]);

  return (
    <DataContext.Provider
      value={{
        watchHistoryData,
        setWatchHistoryData,
        searchHistoryData,
        setSearchHistoryData,
      }}
    >
      <BrowserRouter>
        <Route path="/" component={Landing} />
        <Route path="/import" component={Import} />
      </BrowserRouter>
    </DataContext.Provider>
  );
};
