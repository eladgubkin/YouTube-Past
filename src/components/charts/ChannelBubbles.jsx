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

  // Run on mount
  useEffect(() => {
    setChannelBubblesData(parseChannelBubblesData(watchHistoryData));
  }, []);

  // Run once received data
  useEffect(() => {
    // Simulation
    const simulation = forceSimulation()
      .force("x", forceX().strength(0.05))
      .force("y", forceY().strength(0.05))
      .force(
        "collide",
        forceCollide((d) => radiusScale(d.count) + 1)
      );

    // Radius
    const radiusScale = scaleSqrt().domain([1, 1000]).range([5, 50]);

    // Svg
    const svg = select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    // Defs
    const defs = svg
      .append("defs")
      .selectAll(".channel-image")
      .data(channelBubblesData)
      .enter()
      .append("pattern")
      .attr("class", "channel-image")
      .attr("id", (d) => d.channelId)
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
      .append("image")
      .attr("width", 1)
      .attr("height", 1)
      .attr("preserveAspectRatio", "none")
      .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
      .attr("xlink:href", (d) => {
        console.log(d);
        return `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`;
      });

    // Circles
    const circles = svg
      .selectAll(".channel")
      .data(channelBubblesData)
      .enter()
      .append("circle")
      .attr("class", "channel")
      .attr("r", (d) => radiusScale(d.count))
      .attr("fill", (d) => `url(#${d.channelId})`)
      .on("click", (d) => console.log(d));

    const ticked = () => circles.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
    simulation.nodes(channelBubblesData).on("tick", ticked);

    // Cleanup
    return () => {
      svg.selectAll("*").remove();
    };
  });

  return (
    <>
      <button
        className="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium m-5"
        onClick={() => console.log(channelBubblesData)}
      >
        ChannelBubbles
      </button>

      {channelBubblesData.length === 0 ? (
        console.log("loading...")
      ) : (
        <svg ref={svgRef} />
      )}
    </>
  );
};
