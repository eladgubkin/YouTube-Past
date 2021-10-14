import React from "react";
import { gql, useQuery } from "@apollo/client";
import FileUpload from "./FileUpload";

const GET_DASHBOARD = gql`
  {
    pieChart
    wordCloud
    table
    timeline
    heatmap
    barChart1
    barChart2
  }
`;

const Test = () => {
  // const { loading, error, data } = useQuery(GET_DASHBOARD);

  // if (loading) console.log("loading...");
  // if (error) console.log(error);

  // console.log(data);

  return <FileUpload />;
};

export default Test;
