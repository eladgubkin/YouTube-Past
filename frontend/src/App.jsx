import React, { useState, useEffect } from "react";
// import { DataContext } from "./components/contexts/data";
// import Layout from "./components/Layout/Layout";
import Test from "./components/Test";

const App = () => {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:5000/", { method: "POST" })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData({
  //         watchHistory: JSON.parse(res.watchHistory),
  //         searchHistory: JSON.parse(res.searchHistory),
  //       });
  //     });
  // }, []);

  return (
    // <DataContext.Provider value={data}>
    // {data ? <Layout /> : <h1>Loading...</h1>}
    <Test />
    // </DataContext.Provider>
  );
};

export default App;
