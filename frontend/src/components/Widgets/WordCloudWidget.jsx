import React, { useEffect } from "react";
import Highcharts from "highcharts";
import wordCloud from "highcharts/modules/wordcloud";
import HighchartsReact from "highcharts-react-official";

wordCloud(Highcharts);

const WordCloudWidget = ({ data }) => {
  const words = [];

  data.forEach((obj) => {
    words.push(...obj["words"]);
  });

  let wordCloudData = Highcharts.reduce(
    words,
    (arr, word) => {
      let obj = Highcharts.find(arr, (obj) => {
        return obj.name === word;
      });
      if (obj) {
        obj.weight += 1;
      } else {
        obj = {
          name: word,
          weight: 1,
        };
        arr.push(obj);
      }
      return arr;
    },
    []
  );

  wordCloudData = wordCloudData.sort((a, b) => (a.weight > b.weight ? 1 : b.weight > a.weight ? -1 : 0));

  const options = {
    series: [
      {
        type: "wordcloud",
        data: wordCloudData.splice(-150, Math.ceil(wordCloudData.length)),
        minFontSize: 7,
        style: {
          fontFamily: "Arial",
          textTransform: "uppercase",
        },
        name: "Number of searches",
      },
    ],

    chart: {
      backgroundColor: "#1B2845",
      useHTML: true,
    },

    title: {
      text: "Your Top 150 Most Searched Keywords:",
      style: {
        color: "#fff",
        fontWeight: "bold",
      },
    },

    credits: {
      enabled: false,
    },

    tooltip: {
      useHTML: true,
      borderRadius: 15,
      backgroundColor: "#000",
      animation: true,
      followPointer: true,
      style: {
        color: "#fff",
      },
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default WordCloudWidget;
