import React, { useState } from "react";
import { FilesContext } from "./Contexts/FilesContext";
import { FilesContextProvider } from "./Contexts/FilesContext";
import { Landing } from "./views/Landing";
import { MainApp } from "./views/MainApp";

export const App = () => {
  return (
    <FilesContextProvider>
      <FilesContext.Consumer>
        {(ctx) =>
          !ctx.watchHistoryData?.length || !ctx.searchHistoryData?.length ? (
            <Landing />
          ) : (
            <MainApp />
          )
        }
      </FilesContext.Consumer>
    </FilesContextProvider>
  );
};
