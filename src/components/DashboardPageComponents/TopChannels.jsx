import React from "react"; // React
import { useRecoilValue } from "recoil"; // Recoil
import { getTopChannelsIds } from "../../store/selectors"; // Selectors
import { useQuery } from "react-query"; // React Query
import _ from "lodash"; // Lodash

const fetchChannels = async ({ queryKey }) => {
  const [_, topChannelsIds] = queryKey;

  const ids = JSON.stringify(topChannelsIds.map((c) => c.channelId))
    .slice(1, -1) // Remove "[" and "]"
    .replace(/['"]+/g, "") // Remove any quotes
    .replace(/[,]+/g, "%2C"); // Replace "," with "%2C"

  const URL = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,topicDetails&id=${ids}&key=AIzaSyD4uuC7dAqVXJMRHdfZF0QwMJZ2kjb49Rs`;
  const response = await fetch(URL);
  return response.json();
};

export const TopChannels = () => {
  const topChannelsIds = useRecoilValue(getTopChannelsIds);
  const { data, isLoading } = useQuery(["channels", topChannelsIds], fetchChannels);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    const newData = _.sortBy(
      _.zipWith(
        _.sortBy(JSON.parse(JSON.stringify(topChannelsIds)), (topChannel) => topChannel.channelId),
        _.sortBy(JSON.parse(JSON.stringify(data.items)), (channel) => channel.id),
        (topChannel, channel) =>
          _.defaults(topChannel, {
            channelName: channel.snippet.title,
            desc: channel.snippet.description,
            subCount: channel.statistics.subscriberCount,
            videoCount: channel.statistics.videoCount,
            avatar: channel.snippet.thumbnails.high.url,
          })
      ),
      (c) => c.viewCount
    );

    return (
      <>
        <h1>TopChannels</h1>
        <button onClick={() => console.log(newData)}>newData</button>
      </>
    );
  }
};
