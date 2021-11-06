import React, { useState, createContext } from "react";

export const FilesContext = createContext();

export const FilesContextProvider = ({ children }) => {
  const [watchHistoryData, setWatchHistoryData] = useState([]);
  const [searchHistoryData, setSearchHistoryData] = useState([]);
  const [locationHistoryData, setLocationHistoryData] = useState([]);

  return (
    <FilesContext.Provider
      value={{
        watchHistoryData,
        setWatchHistoryData,
        searchHistoryData,
        setSearchHistoryData,
        locationHistoryData,
        setLocationHistoryData,
      }}
    >
      {children}
    </FilesContext.Provider>
  );
};
