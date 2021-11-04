import React, { useRef, useEffect, useState } from "react";
import { select } from "d3";

export const Slider = () => {
  const [data, setData] = useState([25, 30, 45, 60, 20]);

  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("r", (value) => value)
      .attr("cx", (value) => value * 2)
      .attr("cy", (value) => value * 2)
      .attr("stroke", "red");
  }, [data]);

  return (
    <>
      <svg ref={svgRef}></svg>
      <br />
      <button onClick={() => setData(data.map((value) => value + 5))}>
        Update data
      </button>{" "}
      <button onClick={() => setData(data.filter((value) => value < 35))}>
        Filter data
      </button>
    </>
  );
};
