import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { DataContext } from "../Contexts/DataContext";

// Components
import { Dashboard } from "./Dashboard/Dashboard";
import { ImportFiles } from "./ImportFiles/ImportFiles";

export const App = () => {
  const [watchHistoryData, setWatchHistoryData] = useState([]);
  const [searchHistoryData, setSearchHistoryData] = useState([]);

  return (
    <DataContext.Provider value={{ watchHistoryData, setWatchHistoryData, searchHistoryData, setSearchHistoryData }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/import">Import Files</Link>
          </Route>

          <Route exact path="/dashboard">
            <Dashboard />
            <Link to="/import">Import Files</Link>
          </Route>

          <Route exact path="/import">
            <ImportFiles />
            <Link to="/dashboard">Dashboard</Link>
          </Route>
        </Switch>
      </BrowserRouter>
    </DataContext.Provider>
  );
};
