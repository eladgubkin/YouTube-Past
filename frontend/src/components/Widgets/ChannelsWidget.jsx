import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highcharts3d from "highcharts/highcharts-3d";
import cylinder from "highcharts/modules/cylinder";

highcharts3d(Highcharts);
cylinder(Highcharts);

const ChannelsWidget = ({ data }) => {
  const [newData, setNewData] = useState(data);

  useEffect(() => {
    let array = [];

    newData.sort((a, b) =>
      a.timesViewedChannel > b.timesViewedChannel ? 1 : b.timesViewedChannel > a.timesViewedChannel ? -1 : 0
    );

    newData.forEach((videoObj) => {
      array.push([videoObj.timesViewedChannel, videoObj.channelName]);
    });

    setNewData(
      Array.from(new Set(array.map(JSON.stringify)), JSON.parse)
        .slice(1)
        .slice(-20)
    );
  }, []);

  const options = {
    chart: {
      type: "cylinder",
      backgroundColor: "#0f0c29",
      options3d: {
        enabled: true,
        alpha: 0,
        beta: 0,
        depth: 0,
        viewDistance: 0,
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
        depth: 0,
      },
      series: {
        colorByPoint: true,
      },
    },

    yAxis: {
      title: {
        enabled: false,
      },
    },

    xAxis: {
      type: "category",
      labels: {
        useHTML: true,
        align: "center",
      },
      // reversed: {
      //   enabled: true,
      // },
    },

    tooltip: {
      useHTML: true,
      borderRadius: 15,
      backgroundColor: "#000",
      formatter() {
        return `<span>${this.point.channelName}</span><br><span>View Count: ${this.point.y}</span>`;
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
        keys: ["y", "channelName"],
        data: newData,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ChannelsWidget;
