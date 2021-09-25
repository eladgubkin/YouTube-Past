import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";

const App = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:5000/")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(data);
  //       setData(res);
  //     });
  // }, []);

  return (
    <>
      <Layout />
    </>
  );
};

export default App;
