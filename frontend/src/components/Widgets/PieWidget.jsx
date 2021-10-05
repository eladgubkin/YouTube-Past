import React from "react";
import Highcharts from "highcharts";
import PieChart from "highcharts-react-official";
import findOccurence from "../../utils/findOccurence";

const PieWidget = ({ data }) => {
  const pieData = findOccurence(data, "timesViewedVideo")
    .sort((a, b) =>
      a.occurrence > b.occurrence ? 1 : b.occurrence > a.occurrence ? -1 : 0
    )
    .map((item) => {
      return {
        name: `Watched ${item.timesViewedVideo} times`,
        y: item.occurrence,
      };
    });

  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      backgroundColor: "#1B2845",
    },
    title: {
      text: `${data.length} Total Videos:`,
      style: {
        color: "#fff",
        fontWeight: "bold",
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      useHTML: true,
      borderRadius: 15,
      backgroundColor: "#000",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
      return {
        radialGradient: {
          cx: 0.5,
          cy: 0.3,
          r: 0.7,
        },
        stops: [
          [0, color],
          [1, Highcharts.color(color).brighten(-0.3).get("rgb")], // darken
        ],
      };
    }),
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: "Percentage",
        colorByPoint: true,
        data: pieData,
      },
    ],
  };

  return <PieChart highcharts={Highcharts} options={options} />;
};

export default PieWidget;
