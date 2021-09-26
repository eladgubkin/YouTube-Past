import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highcharts3d from "highcharts/highcharts-3d";

highcharts3d(Highcharts);

const VideosWidget = ({ data }) => {
  const [newData, setNewData] = useState(data);

  useEffect(() => {
    let array = [];

    newData.sort((a, b) =>
      a.timesViewedVideo > b.timesViewedVideo ? 1 : b.timesViewedVideo > a.timesViewedVideo ? -1 : 0
    );

    newData.forEach((videoObj) => {
      array.push([videoObj.title, videoObj.timesViewedVideo]);
    });

    setNewData(
      Array.from(new Set(array.map(JSON.stringify)), JSON.parse)
        .slice(1)
        .slice(-15)
    );
  }, []);

  const options = {
    chart: {
      type: "column",
      backgroundColor: "#0f0c29",
      options3d: {
        enabled: true,
        alpha: 0,
        beta: 0,
        depth: 8,
        viewDistance: 75,
      },
    },
    title: {
      text: "Top YouTube Videos",
      style: {
        color: "#fff",
        fontWeight: "bold",
      },
    },
    plotOptions: {
      column: {
        depth: 25,
      },
    },

    legend: {
      enabled: false,
    },

    credits: {
      enabled: false,
    },

    series: [
      {
        data: newData,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default VideosWidget;
