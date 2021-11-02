import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Contexts/DataContext";

// Components
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Landing = () => {
  const { watchHistoryData, searchHistoryData } = useContext(DataContext);

  return (
    <>
      <Navbar />
      <Link to="/import">Import Button</Link>
      <main>
        <h1>This is Landing Page</h1>
        <h1>Interactive example of Race Chart</h1>
        <h1>Interactive example of Word Cloud</h1>
        <h1>Interactive example of World Map</h1>
        <h1>Interactive example of Heatmap</h1>
      </main>
      <button onClick={() => console.log(watchHistoryData)}>watchHistoryData</button>
      <button onClick={() => console.log(searchHistoryData)}>searchHistoryData</button>
      <Footer />
    </>
  );
};
