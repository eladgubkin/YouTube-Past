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

  // const makeScale = (domain, range) => {
  //   const minDomain = domain[0];
  //   const maxDomain = domain[1];
  //   const rangeStart = range[0];
  //   const rangeEnd = range[1];

  //   return (value) => {
  //     return rangeStart + (rangeEnd - rangeStart) * ((value - minDomain) / (maxDomain - minDomain));
  //   };
  // };

  // const minWeight = wordCloudData.reduce(
  //   (min, word) => (word.weight < min ? word.weight : min),
  //   wordCloudData[0].weight
  // );
  // const maxWeight = wordCloudData.reduce(
  //   (max, word) => (word.weight > max ? word.weight : max),
  //   wordCloudData[0].weight
  // );
  // const scale = makeScale([minWeight, maxWeight], [0.3, 1]);

  // const scaledData = wordCloudData.map((word) => ({
  //   name: word.name,
  //   weight: word.weight,
  //   opacity: `${scale(word.weight)}`,
  // }));

  const options = {
    series: [
      {
        type: "wordcloud",
        data: wordCloudData.splice(-100, Math.ceil(wordCloudData.length)),
        rotation: {
          from: 0,
          to: 0,
        },
        minFontSize: 7,
        style: {
          fontFamily: "Arial",
        },
        name: "Number of searches",
      },
    ],

    chart: {
      backgroundColor: "#0f0c29",
      useHTML: true,
    },

    title: {
      text: "Top 100 Searched keywords",
      style: {
        color: "#fff",
        fontWeight: "bold",
      },
    },

    credits: {
      enabled: false,
    },

    tooltip: {
      animation: true,
      followPointer: true,
      borderRadius: 20,
      backgroundColor: "#333",
      style: {
        color: "#fff",
      },
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default WordCloudWidget;
