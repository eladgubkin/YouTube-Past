import React, { useState } from "react";
import FileUpload from "./FileUpload";
import _ from "lodash";

const Dashboard = () => {
  const [data, setData] = useState([]);

  if (_.isEmpty(data)) {
    return <FileUpload data={data} setData={setData} />;
  }

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={() => console.log(data)}>Click</button>
    </>
  );
};

export default Dashboard;
