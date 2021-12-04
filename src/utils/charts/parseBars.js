import _ from "lodash";

export const parseBars = (watchHistoryData) => {
  let data = watchHistoryData;

  const dataFilteredByYear = {};
  const years = _.uniqBy(_.map(data, (video) => video.time.year()));

  // Filter by years.
  _.forEach(years, (year) => {
    dataFilteredByYear[year] = _.filter(data, (video) => video.time.year() === year);
  });

  return dataFilteredByYear;
};
