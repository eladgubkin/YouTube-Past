import React from "react"; // React
// import { Summary } from "../components/DashboardPageComponents/Summary"; // Component
// import { Statistics } from "../components/DashboardPageComponents/Statistics"; // Component
import { TopChannels } from "../components/DashboardPageComponents/TopChannels"; // Component
import { TopVideos } from "../components/DashboardPageComponents/TopVideos"; // Component
import { Navbar } from "../components/DashboardPageComponents/Navbar"; // Component

export const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* <Summary />/ */}
        {/* <Statistics /> */}
        <TopChannels />
        <TopVideos />
      </main>
    </>
  );
};
