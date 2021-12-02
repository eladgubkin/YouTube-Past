import React from "react";
import { FilesContext, FilesContextProvider } from "./contexts/FilesContext";
import { LandingScreen } from "./views/LandingScreen";
import { AppScreen } from "./views/AppScreen";

export const App = () => {
  return (
    <FilesContextProvider>
      <FilesContext.Consumer>
        {({ watchHistoryData }) => (!watchHistoryData?.length ? <LandingScreen /> : <AppScreen />)}
      </FilesContext.Consumer>
    </FilesContextProvider>
  );
};
