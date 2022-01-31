import React from "react";

export const Summary = () => {
  const { months, videos, channels, searches } = {
    months: 32,
    videos: "36.3k",
    channels: "7.7k",
    searches: "8.4k",
  };

  return (
    <section>
      <h1>Introduction</h1>
      <p>
        In the last <span>{months}</span> months you have watched a total of <span>{videos}</span>{" "}
        videos from <span>{channels}</span> different video creators and searched a total of{" "}
        <span>{searches}</span> times on YouTube
      </p>
    </section>
  );
};
