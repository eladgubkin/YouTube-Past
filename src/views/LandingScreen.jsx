import React, { useContext } from "react";
import { FilesContext } from "../contexts/FilesContext";
import { parseWatchHistoryFile } from "../utils/files/parseWatchHistoryFile";
import { parseSearchHistoryFile } from "../utils/files/parseSearchHistoryFile";
import { parseLocationHistoryFile } from "../utils/files/parseLocationHistoryFile";
import { Navbar } from "../Components/ui/Navbar";
import { Card } from "../components/ui/Card";
import bg from "../components/ui/bg.svg";

export const LandingScreen = () => {
  const { setWatchHistoryData, setSearchHistoryData, setLocationHistoryData } =
    useContext(FilesContext);
  return (
    <>
      <Card
        cardHeader="watch-history.json"
        cardTitle="Watch History"
        setState={setWatchHistoryData}
        parser={parseWatchHistoryFile}
      />
    </>
  );
};
