import React, { useState } from "react";
import { FilesContext } from "./Contexts/FilesContext";
import { FilesContextProvider } from "./Contexts/FilesContext";
import { LandingScreen } from "./views/LandingScreen";
import { AppScreen } from "./views/AppScreen";

export const App = () => {
  return (
    <FilesContextProvider>
      <FilesContext.Consumer>
        {(ctx) =>
          !ctx.watchHistoryData?.length ||
          !ctx.searchHistoryData?.length ||
          !ctx.locationHistoryData?.length ? (
            <LandingScreen />
          ) : (
            <AppScreen />
          )
        }
      </FilesContext.Consumer>
    </FilesContextProvider>
  );
};
