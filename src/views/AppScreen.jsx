import React from "react";
import { Navbar } from "../Components/ui/Navbar";
import { ChartsContextProvider } from "../contexts/ChartsContext";
import { Heatmap } from "../components/charts/Heatmap";

export const AppScreen = () => {
  return (
    <>
      <Navbar />
      <ChartsContextProvider>
        <Heatmap />
      </ChartsContextProvider>
    </>
  );
};
