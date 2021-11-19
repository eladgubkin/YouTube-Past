import _ from "lodash";

export const parseWeekBarsData = (watchHistoryData, filterByYear = 2020, filterByMonth = 7) => {
  let data = [];

  data = watchHistoryData.map((video) => ({
    year: video.time.year(),
    month: video.time.month(),
    day: video.time.day(),
    videoId: video.videoId,
  }));

  if (filterByYear) data = _.remove(data, { year: filterByYear });
  if (filterByMonth) data = _.remove(data, { month: filterByMonth });

  // Count
  data = _.map(_.countBy(data, "day"), (count, day) => ({
    day,
    count: count / 4,
  }));

  return data;
};
