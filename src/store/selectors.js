import { selector } from "recoil"; // Recoil
import { watchHistoryAtom } from "./atoms"; // Atoms
import _ from "lodash"; // Lodash

export const mostViewedVideosList = selector({
  key: "mostViewedVideosList",
  get: ({ get }) => {
    const watchHistory = get(watchHistoryAtom);

    // Count every video
    const asd = _.map(
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
    const data = _.sortBy(asd, (e) => e.viewCount).slice(-50);

    return data;
  },
});

export const mostViewedChannelsList = selector({
  key: "mostViewedChannelsList",
  get: ({ get }) => {
    const watchHistory = get(watchHistoryAtom);

    // Count every video
    const asd = _.map(
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
    const data = _.sortBy(asd, (e) => e.viewCount).slice(-50);

    return data;
  },
});
