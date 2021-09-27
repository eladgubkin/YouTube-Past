import React from "react";
import Highcharts from "highcharts";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsReact from "highcharts-react-official";
import isTimeBetween from "../../utils/isTimeBetween";
import moment from "moment";

HighchartsHeatmap(Highcharts);

const getPointCategoryName = (point, dimension) => {
  const series = point.series,
    isY = dimension === "y",
    axis = series[isY ? "yAxis" : "xAxis"];
  return axis.categories[point[isY ? "y" : "x"]];
};

const options = {
  chart: {
    type: "heatmap",
    marginTop: 40,
    marginBottom: 80,
    plotBorderWidth: 1,
    backgroundColor: "#1B2845",
  },

  title: {
    text: "",
    style: {
      color: "#fff",
      fontWeight: "bold",
    },
  },

  xAxis: {
    // categories: ["2018", "2019", "2020", "2021"],
    // categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    // categories: [
    //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    // ],
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  },

  yAxis: {
    categories: [
      "00:00 - 02:00",
      "02:00 - 04:00",
      "04:00 - 06:00",
      "06:00 - 08:00",
      "08:00 - 10:00",
      "10:00 - 12:00",
      "12:00 - 14:00",
      "14:00 - 16:00",
      "16:00 - 18:00",
      "18:00 - 20:00",
      "20:00 - 22:00",
      "22:00 - 00:00",
    ],
    title: null,
    reversed: true,
  },

  accessibility: {
    point: {
      descriptionFormatter: function (point) {
        var ix = point.index + 1,
          xName = getPointCategoryName(point, "x"),
          yName = getPointCategoryName(point, "y"),
          val = point.value;
        return ix + ". " + xName + " sales " + yName + ", " + val + ".";
      },
    },
  },

  colorAxis: {
    min: 0,
    minColor: "#0f0c29",
    maxColor: Highcharts.getOptions().colors[5],
  },

  legend: {
    align: "right",
    layout: "vertical",
    margin: 0,
    verticalAlign: "top",
    y: 25,
    symbolHeight: 280,
  },

  credits: {
    enabled: false,
  },
  tooltip: {
    formatter: function () {
      return (
        "<b>" +
        getPointCategoryName(this.point, "x") +
        "</b> sold <br><b>" +
        this.point.value +
        "</b> items on <br><b>" +
        getPointCategoryName(this.point, "y") +
        "</b>"
      );
    },
  },

  series: [
    {
      name: "Sales per employee",
      borderWidth: 1,
      data: [
        [0, 0, 0],
        [1, 1, 0],
        [2, 2, 0],
        [3, 3, 0],
        [4, 4, 1],
        [5, 5, 0],
        [6, 6, 0],

        [0, 1, 0],
        [1, 2, 0],
        [2, 3, 4],
        [3, 4, 0],
        [4, 5, 3],
        [5, 6, 2],
        [6, 7, 0],

        [0, 2, 0],
        [1, 3, 0],
        [2, 4, 6],
        [3, 5, 0],
        [4, 6, 0],
        [5, 7, 0],
        [6, 8, 4],

        [0, 3, 0],
        [1, 4, 8],
        [2, 5, 0],
        [3, 6, 0],
        [4, 7, 0],
        [5, 8, 0],
        [6, 9, 0],

        [0, 4, 0],
        [1, 5, 0],
        [2, 6, 0],
        [3, 7, 0],
        [4, 8, 5],
        [5, 9, 0],
        [6, 10, 0],

        [1, 0, 0],
        [2, 1, 0],
        [3, 2, 0],
        [4, 3, 0],
        [5, 4, 0],
        [6, 5, 0],

        [2, 0, 0],
        [3, 1, 0],
        [4, 2, 11],
        [5, 3, 0],
        [6, 4, 0],

        [3, 0, 0],
        [4, 1, 0],
        [5, 2, 8],
        [6, 3, 0],

        [4, 0, 0],
        [5, 1, 0],
        [6, 2, 0],

        [5, 0, 0],
        [6, 1, 8],

        [6, 0, 0],

        [0, 5, 0],
        [0, 6, 0],
        [0, 7, 0],
        [0, 8, 5],
        [0, 9, 0],
        [0, 10, 0],
        [0, 11, 0],

        [1, 6, 0],
        [1, 7, 0],
        [1, 8, 0],
        [1, 9, 0],
        [1, 10, 0],
        [1, 11, 0],

        [2, 7, 0],
        [2, 8, 0],
        [2, 9, 13],
        [2, 10, 0],
        [2, 11, 0],

        [3, 8, 0],
        [3, 9, 0],
        [3, 10, 0],
        [3, 11, 0],

        [4, 9, 0],
        [4, 10, 0],
        [4, 11, 4],

        [5, 9, 0],
        [5, 10, 1],
        [5, 11, 0],

        [11, 5, 1],
      ],
      dataLabels: {
        enabled: true,
        color: "#000000",
      },
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 1000,
        },
        chartOptions: {
          yAxis: {
            labels: {
              formatter: function () {
                return this.value.charAt(0);
              },
            },
          },
        },
      },
    ],
  },
};

const HeatmapWidget = ({ data }) => {
  const myNewData = [];

  const myTime = moment(data[5].time).format("H:mm");

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default HeatmapWidget;
