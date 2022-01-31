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
            topics: channel.topicDetails.topicCategories.map((topic) => topic.slice(30)),
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
        {newData.map((channel, key) => {
          return (
            <div key={key} className="flex flex-col text-center items-center max-w-lg">
              <img
                src={channel.avatar}
                alt="Avatar"
                className="rounded-full border-solid border-white border-2 -mt-3 w-32"
              />

              <h1 className="text-sm bold font-sans">{channel.channelName}</h1>
              <ul className="flex gap-3">
                {channel.topics.map((topic, key) => {
                  return (
                    <li key={key} className="bg-gray-300 rounded px-3 py-1 whitespace-nowrap">
                      {topic}
                    </li>
                  );
                })}
              </ul>
              <div className="flex justify-center pb-3">
                <span className="text-center mr-3 border-r pr-3">
                  {channel.subCount} subscribers
                </span>
                <span className="text-center mr-3 border-r pr-3">{channel.videoCount} videos</span>
              </div>
            </div>
          );
        })}
        <button onClick={() => console.log(newData)}>newData</button>
      </>
    );
  }
};
