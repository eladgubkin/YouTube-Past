import React, { useContext } from "react";
import { FilesContext } from "../contexts/FilesContext";
import { parseWatchHistoryFile } from "../utils/files/parseWatchHistoryFile";
import { parseSearchHistoryFile } from "../utils/files/parseSearchHistoryFile";
import { parseLocationHistoryFile } from "../utils/files/parseLocationHistoryFile";
import { Navbar } from "../Components/ui/Navbar";
import { Footer } from "../Components/ui/Footer";
import { Card } from "../components/ui/Card";

export const LandingScreen = () => {
  const { setWatchHistoryData, setSearchHistoryData, setLocationHistoryData } =
    useContext(FilesContext);
  return (
    <>
      <Navbar />
      <main className="md:container md:mx-auto">
        {/* <Explanation /> */}
        <section className="flex ">
          <Card
            cardHeader="watch-history.json"
            cardTitle="Watch History"
            setState={setWatchHistoryData}
            parser={parseWatchHistoryFile}
          />
          <Card
            cardHeader="search-history.json"
            cardTitle="Search History"
            setState={setSearchHistoryData}
            parser={parseSearchHistoryFile}
          />
          <Card
            cardHeader="location-history.json"
            cardTitle="Location History"
            setState={setLocationHistoryData}
            parser={parseLocationHistoryFile}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};
