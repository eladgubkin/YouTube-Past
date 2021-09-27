import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highcharts3d from "highcharts/highcharts-3d";
import cylinder from "highcharts/modules/cylinder";

highcharts3d(Highcharts);
cylinder(Highcharts);

const VideosWidget = ({ data }) => {
  const [newData, setNewData] = useState(data);

  useEffect(() => {
    let array = [];

    newData.sort((a, b) =>
      a.timesViewedVideo > b.timesViewedVideo ? 1 : b.timesViewedVideo > a.timesViewedVideo ? -1 : 0
    );

    newData.forEach((videoObj) => {
      array.push([
        // `<span><a href="${videoObj.titleUrl}" target="_blank"><img src="https://i.ytimg.com/vi_webp/${videoObj.videoId}/mqdefault.webp" style="width: 30px;"/><br></span></a>`,
        videoObj.timesViewedVideo,
        videoObj.title,
      ]);
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
      text: "Top YouTube Videos",
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
    },

    tooltip: {
      useHTML: true,
      borderRadius: 15,
      backgroundColor: "#000",
      formatter() {
        return `<span>${this.point.title}</span><br><span>View Count: ${this.point.y}</span>`;
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
        keys: ["y", "title"],
        data: newData,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default VideosWidget;
