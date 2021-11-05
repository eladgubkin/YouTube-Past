import React from "react";

// Ui
import { Navbar } from "../Components/ui/Navbar";
import { Footer } from "../Components/ui/Footer";
import { Explanation } from "../Components/ui/Explanation";

// Dropzones
import { WatchHistoryDropzone } from "../components/files/WatchHistoryDropzone";
import { SearchHistoryDropzone } from "../components/files/SearchHistoryDropzone";

export const Landing = () => {
  return (
    <>
      <Navbar />
      <main className="md:container md:mx-auto">
        <Explanation />

        <h1>Here Import Your Files from Google Takeout</h1>
        <div className="p-4 w-80">
          <div className="p-8 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold text-gray-800">watch-history.json</h2>
            <WatchHistoryDropzone />
          </div>
        </div>
        <div className="p-4 w-80">
          <div className="p-8 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold text-gray-800">search-history.json</h2>
            <SearchHistoryDropzone />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
