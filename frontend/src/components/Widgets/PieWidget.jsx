import React from "react";
import Highcharts from "highcharts";
import PieChart from "highcharts-react-official";

const PieWidget = ({ data }) => {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      backgroundColor: "#1B2845",
    },
    title: {
      text: `Out of ${data.length} Videos:`,
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
        name: "Brands",
        colorByPoint: true,
        data: [
          {
            name: "Watched once",
            y: 61.41,
          },
          {
            name: "Watched 2 times",
            y: 11.84,
          },
          {
            name: "Watched 5 times",
            y: 10.85,
          },
          {
            name: "Watched 10 times",
            y: 4.67,
          },
          {
            name: "Watched 25 times",
            y: 4.18,
          },
          {
            name: "Watched 50 times",
            y: 2.1,
          },
        ],
      },
    ],
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingLeft: 20,
      }}
    >
      <div style={{ width: "100%", height: "100%", background: "#1B2845" }}>
        <PieChart highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default PieWidget;
