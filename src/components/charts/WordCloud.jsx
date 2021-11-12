import React, { useContext, useEffect, useRef } from "react";
import { ChartsContext } from "../../contexts/ChartsContext";
import { FilesContext } from "../../contexts/FilesContext";
import { parseWordCloudData } from "../../utils/charts/wordCloud/parseWordCloudData";
import { select, cloud } from "d3";

const myWords = [
  "Hello",
  "Everybody",
  "How",
  "Are",
  "You",
  "Today",
  "It",
  "Is",
  "A",
  "Lovely",
  "Day",
  "I",
  "Love",
  "Coding",
  "In",
  "My",
  "Van",
  "Mate",
];

const margin = { top: 10, right: 10, bottom: 10, left: 10 };
const width = 450 - margin.left - margin.right;
const height = 450 - margin.top - margin.bottom;

export const WordCloud = () => {
  const { wordCloudData, setWordCloudData } = useContext(ChartsContext);
  const { searchHistoryData } = useContext(FilesContext);
  const svgRef = useRef();

  useEffect(() => {
    setWordCloudData(parseWordCloudData(searchHistoryData));

    const svg = select(svgRef.current);
    svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const layout = layout
      .cloud()
      .size([width, height])
      .words(
        myWords.map((d) => {
          return { text: d };
        })
      )
      .padding(10)
      .fontSize(60)
      .on("end", draw);

    layout.start();
  }, []);

  return (
    <>
      <button
        className="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium m-5"
        onClick={() => console.log(wordCloudData)}
      >
        WordCloud
      </button>
      <svg ref={svgRef} />
    </>
  );
};
