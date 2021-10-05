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
      a.timesViewedVideo > b.timesViewedVideo
        ? 1
        : b.timesViewedVideo > a.timesViewedVideo
        ? -1
        : 0
    );

    newData.forEach((videoObj) => {
      array.push([
        // `<a href="${videoObj.titleUrl}" target="_blank"><img style="width:30px;border-radius:50%" src="https://i.ytimg.com/vi_webp/${videoObj.videoId}/mqdefault.webp"/></a>`,
        `<a href="${
          videoObj.titleUrl
        }" target="_blank" style="text-decoration: none; font-size:14px;">${
          videoObj.title
            ? videoObj.title.charAt(0).toUpperCase()
            : videoObj.title
        }</a>`,
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
      backgroundColor: "#1B2845",
    },
    title: {
      text: "Your Top 20 YouTube Videos",
      style: {
        color: "#fff",
        fontWeight: "bold",
      },
    },
    plotOptions: {
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
        keys: ["name", "y", "title"],
        data: newData,
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            yAxis: {
              labels: {
                enabled: false,
              },
            },
          },
        },
      ],
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default VideosWidget;
