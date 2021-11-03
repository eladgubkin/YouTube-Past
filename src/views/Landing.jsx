import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Contexts/DataContext";

// Components
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { WatchedVideos } from "../components/WatchedVideos";
import { Slider } from "../components/Slider";

export const Landing = () => {
  const { watchHistoryData, searchHistoryData } = useContext(DataContext);

  return (
    <>
      <Navbar />
      <main className="md:container md:mx-auto">
        <WatchedVideos />
        <Slider />
      </main>

      {/* <Footer /> */}
    </>
  );
};
