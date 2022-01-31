import React from "react";

export const Statistics = () => {
  const { videos, channels, searches } = {
    videos: "36.3k",
    channels: "7.7k",
    searches: "8.4k",
  };

  return (
    <section>
      <SingleStatistic text={videos} />
      <SingleStatistic text={channels} />
      <SingleStatistic text={searches} />
    </section>
  );
};

const SingleStatistic = ({ text }) => {
  return (
    <div>
      <h3>{text}</h3>
      <i>Icon</i>
    </div>
  );
};
