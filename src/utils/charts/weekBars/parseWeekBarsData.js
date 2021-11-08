import _ from "lodash";

export const parseWeekBarsData = (
  watchHistoryData,
  year = 2020,
  month = 10
) => {
  let data = [];

  data = watchHistoryData.map((video) => ({
    year: video.time.year(),
    month: video.time.month(),
    day: video.time.day(),
    videoId: video.videoId,
  }));

  if (year) data = _.remove(data, { year });
  console.log(data);

  if (month) data = _.remove(data, { month });
  console.log(data);

  // Count
  data = _.map(_.countBy(data, "day"), (count, day) => ({
    day,
    count,
  }));

  return data;
};
