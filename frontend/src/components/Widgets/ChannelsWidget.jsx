import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highcharts3d from "highcharts/highcharts-3d";

highcharts3d(Highcharts);

const ChannelsWidget = ({ data }) => {
  const [newData, setNewData] = useState(data);

  useEffect(() => {
    let array = [];

    newData.sort((a, b) =>
      a.timesViewedChannel > b.timesViewedChannel ? 1 : b.timesViewedChannel > a.timesViewedChannel ? -1 : 0
    );

    newData.forEach((videoObj) => {
      array.push([videoObj.channelName, videoObj.timesViewedChannel]);
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
      text: "Top YouTube Channels",
      style: {
        color: "#fff",
        fontWeight: "bold",
      },
    },
    plotOptions: {
      column: {
        depth: 25,
      },
      series: {
        colorByPoint: true,
        colors: [
          "#012a4a",
          "#013a63",
          "#01497c",
          "#014f86",
          "#2a6f97",
          "#2c7da0",
          "#468faf",
          "#61a5c2",
          "#89c2d9",
          "#a9d6e5",
        ],
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

export default ChannelsWidget;
