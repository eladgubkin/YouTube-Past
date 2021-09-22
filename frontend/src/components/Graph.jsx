import React, { useState } from "react";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

const Graph = ({ data }) => {
  return (
    <BarChart width={1000} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="title" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="views" fill="#82ca9d" />
    </BarChart>
  );
};

export default Graph;
