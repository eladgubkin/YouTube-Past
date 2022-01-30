import { selector } from "recoil"; // Recoil
import { watchHistoryAtom } from "./atoms"; // Atoms
import _ from "lodash"; // Lodash

export const getTopChannelsIds = selector({
  key: "getTopChannelsIds",
  get: ({ get }) => {
    const watchHistory = get(watchHistoryAtom);

    // Count every video
    const countedList = _.map(
      _.countBy(
        watchHistory.map((video) => ({
          channelId: video.channelId,
        })),
        "channelId"
      ),
      (val, channelId) => ({
        channelId: channelId,
        viewCount: val,
      })
    );

    // Get only top 50
    const channelIds = _.sortBy(countedList, (e) => e.viewCount).slice(-50);

    return channelIds;
  },
});

export const getTopVideosIds = selector({
  key: "getTopVideosIds",
  get: ({ get }) => {
    const watchHistory = get(watchHistoryAtom);

    // Count every video
    const countedList = _.map(
      _.countBy(
        watchHistory.map((video) => ({
          videoId: video.videoId,
        })),
        "videoId"
      ),
      (val, videoId) => ({
        videoId: videoId,
        viewCount: val,
      })
    );

    // Get only top 50
    const videoIds = _.sortBy(countedList, (e) => e.viewCount).slice(-50);

    return videoIds;
  },
});
