import React, { useContext, useEffect, useRef } from "react";
import { ChartsContext } from "../../contexts/ChartsContext";
import { FilesContext } from "../../contexts/FilesContext";
import { parseChannelBubblesData } from "../../utils/charts/channelBubbles/parseChannelBubblesData";
import {
  select,
  forceSimulation,
  forceX,
  forceY,
  forceCollide,
  scaleSqrt,
} from "d3";

const width = window.innerWidth;
const height = window.innerHeight;

export const ChannelBubbles = () => {
  const { channelBubblesData, setChannelBubblesData } = useContext(ChartsContext);
  const { watchHistoryData } = useContext(FilesContext);
  const svgRef = useRef();

  useEffect(() => {
    setChannelBubblesData(parseChannelBubblesData(watchHistoryData));

    const simulation = forceSimulation()
      .force("x", forceX().strength(0.05))
      .force("y", forceY().strength(0.05))
      .force(
        "collide",
        forceCollide((d) => radiusScale(d.count) + 1)
      );

    const svg = select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const radiusScale = scaleSqrt().domain([1, 1000]).range([5, 50]);

    const circles = svg
      .selectAll(".channel")
      .data(channelBubblesData)
      .enter()
      .append("circle")
      .attr("class", "channel")
      .attr("r", (d) => radiusScale(d.count))
      .attr("fill", "lime")
      .on("click", (d) => console.log(d.target));

    const ticked = () => {
      circles.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
    };

    simulation.nodes(channelBubblesData).on("tick", ticked);
  }, []);

  return (
    <>
      <button
        className="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium m-5"
        onClick={() => console.log(channelBubblesData)}
      >
        ChannelBubbles
      </button>
      <svg ref={svgRef} />
    </>
  );
};
