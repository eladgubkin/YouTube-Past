import _ from "lodash";

export const parseWeekBarsData = (watchHistoryData) => {
  const data = _.map(
    _.countBy(
      watchHistoryData.map((video) => ({
        videoId: video.videoId,
        day: video.time.day(),
      })),
      "day"
    ),
    (val, key) => ({
      day: key,
      count: val,
    })
  );

  return data;
};
