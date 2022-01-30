import React from "react"; // React
import { useRecoilValue } from "recoil"; // Recoil
import { getTopVideosIds } from "../../store/selectors"; // Selectors
import { useQuery } from "react-query"; // React Query
import _ from "lodash"; // Lodash

const fetchVideos = async ({ queryKey }) => {
  const [_, topVideosIds] = queryKey;

  const ids = JSON.stringify(topVideosIds.map((c) => c.videoId))
    .slice(1, -1) // Remove "[" and "]"
    .replace(/['"]+/g, "") // Remove any quotes
    .replace(/[,]+/g, "%2C"); // Replace "," with "%2C"

  const URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,topicDetails&id=${ids}&key=AIzaSyD4uuC7dAqVXJMRHdfZF0QwMJZ2kjb49Rs`;
  const response = await fetch(URL);
  return response.json();
};

export const TopVideos = () => {
  const topVideosIds = useRecoilValue(getTopVideosIds);
  const { data, isLoading } = useQuery(["videos", topVideosIds], fetchVideos);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    const newData = _.sortBy(
      _.zipWith(
        _.sortBy(JSON.parse(JSON.stringify(topVideosIds)), (topVideo) => topVideo.videoId),
        _.sortBy(JSON.parse(JSON.stringify(data.items)), (video) => video.id),
        (topVideo, video) =>
          _.defaults(topVideo, {
            videoName: video.snippet.title,
            channelName: video.snippet.channelTitle,
            totalViewCount: video.statistics.viewCount,
            publishedAt: video.snippet.publishedAt,
            thumbnail: video.snippet.thumbnails.high.url,
          })
      ),
      (c) => c.viewCount
    );

    return (
      <>
        <h1>TopVideos</h1>
        <button onClick={() => console.log(newData)}>newData</button>
      </>
    );
  }
};
