import React, { useState, useEffect } from "react";
import Main from "./components/Main";

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:5000/", { method: "POST" })
      .then((res) => res.json())
      .then((res) => {
        setData({
          watchHistory: JSON.parse(res.watchHistory),
          searchHistory: JSON.parse(res.searchHistory),
        });
      });
  }, []);

  if (Object.keys(data).length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return <Main data={data} />;
  }
};

export default App;
