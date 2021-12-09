import React, { useEffect, useRef } from "react";
import { select, forceSimulation, forceX, forceY, forceCollide, scaleSqrt } from "d3";

const width = window.innerWidth;
const height = window.innerHeight;

export const ChannelBubbles = ({ data, updateData }) => {
  const svgRef = useRef();

  const apply = () => {
    // Simulation
    const simulation = forceSimulation()
      .force("x", forceX().strength(0.05))
      .force("y", forceY().strength(0.05))
      .force(
        "collide",
        forceCollide((d) => radiusScale(d.selfViewCount) + 1)
      );

    // Radius
    const radiusScale = scaleSqrt().domain([1, 1000]).range([10, 60]);

    // Svg
    const svg = select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    // Defs
    const defs = svg.append("defs");

    defs
      .selectAll(".channel-image")
      .data(data)
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
      .attr("xlink:href", (d) => d.thumbnail);

    // Circles
    const circles = svg
      .selectAll(".channel")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "channel")
      .attr("r", (d) => radiusScale(d.selfViewCount))
      .attr("fill", (d) => `url(#${d.channelId})`)
      .on("click", (d) => console.log(d.target.__data__.title));

    const ticked = () => circles.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
    simulation.nodes(data).on("tick", ticked);
  };

  return (
    <>
      <button onClick={apply}>Channel Bubbles</button>
      <svg ref={svgRef} />
    </>
  );
};
