import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import { DataContext } from "../Contexts/DataContext";
import _ from "lodash";

// Components
import { Main } from "./Main/Main";
import { ImportFiles } from "./ImportFiles/ImportFiles";

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
        <Switch>
          {_.isEmpty(watchHistoryData) || _.isEmpty(searchHistoryData) ? (
            <>
              <Redirect to="/files/import" />
              <Route exact path="/files/import" component={ImportFiles} />
            </>
          ) : (
            <>
              <Redirect to="/" />
              <Route exact path="/" component={Main} />
            </>
          )}
        </Switch>
      </BrowserRouter>
    </DataContext.Provider>
  );
};
