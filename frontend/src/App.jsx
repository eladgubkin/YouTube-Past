import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";

const App = () => {
  const [data, setData] = useState({});

  // useEffect(() => {
  //   fetch("http://127.0.0.1:5000/", { method: "POST" })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData({
  //         watchHistory: JSON.parse(res.watchHistory),
  //         searchHistory: JSON.parse(res.searchHistory),
  //       });
  //     });
  // }, []);

  console.log(data);

  return (
    <>
      <Layout />
    </>
  );
};

export default App;
