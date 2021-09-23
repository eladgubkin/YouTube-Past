import React, { useState } from "react";
import Layout from "./components/Layout";

const App = () => {
  const [data, setData] = useState([]);
  const [channelName, setChannelName] = useState("Coin Bureau");
  const [time, setTime] = useState({ year: null, month: null, day: null });

  const getRandomVideo = () => {
    fetch("http://127.0.0.1:5000/random")
      .then((result) => result.json())
      .then((data) => {
        setData(data);
      });
  };

  const getByChannel = () => {
    fetch(`http://127.0.0.1:5000/channel?name=${channelName}`)
      .then((result) => result.json())
      .then((data) => {
        setData(data);
      });
  };

  const getByTime = () => {
    fetch(`http://127.0.0.1:5000/time?year=${time.year}&month=${time.month}&day=${time.day}`)
      .then((result) => result.json())
      .then((data) => {
        setData(data);
      });
  };

  const setChannelNameCB = (e) => {
    e.preventDefault();
    setChannelName(e.target.value);
  };

  const setDateTimeFunc = (e) => {
    e.preventDefault();
    setTime({
      year: new Date(e.target.value).getUTCFullYear(),
      month: new Date(e.target.value).getUTCMonth() + 1,
      day: new Date(e.target.value).getUTCDate(),
    });
  };

  const getByMostViews = () => {
    fetch("http://127.0.0.1:5000/views")
      .then((result) => result.json())
      .then((data) => {
        setData(
          data.map((video) => ({
            link: video[0],
            viewTimes: video[1],
          }))
        );
      });
  };

  return (
    <>
      <Layout />
      {/* <button onClick={getRandomVideo}>Get a random video</button>
      <button onClick={getByChannel}>Get all videos by channel name:</button>
      <input type="text" onChange={setChannelNameCB} value={channelName} />
      <input type="date" min="2019-04-08" max="2021-09-20" onChange={setDateTimeFunc} />
      <button onClick={getByTime}>Get by date</button>
      <button onClick={getByMostViews}>Get the most viewed Video by you</button>
      <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  );
};

export default App;
