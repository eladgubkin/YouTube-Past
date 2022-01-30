import React from "react"; // React
import { TopChannels } from "../components/DashboardPageComponents/TopChannels";
import { TopVideos } from "../components/DashboardPageComponents/TopVideos";

export const DashboardPage = () => {
  return (
    <main>
      <h1>Dashboard</h1>
      <TopChannels />
      <TopVideos />
    </main>
  );
};
