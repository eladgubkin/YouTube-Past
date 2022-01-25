import React, { useState, useContext } from "react";
import { parseStats } from "../utils/charts/parseStats";
import { FilesContext } from "../contexts/FilesContext";

export const FirstPage = () => {
  const { watchHistoryData } = useContext(FilesContext);
  const [statsData, setStatsData] = useState(parseStats(watchHistoryData));

  return (
    <div>
      <section>
        <p>
          In the last 32 months you have clicked a total of 32.4K videos from 4337 different video
          creators and searched a total of 8.4k times on YouTube!
        </p>
      </section>
      <section>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </section>
      <section>
        <button onClick={() => console.log(statsData)}>Click</button>
      </section>
    </div>
  );
};
