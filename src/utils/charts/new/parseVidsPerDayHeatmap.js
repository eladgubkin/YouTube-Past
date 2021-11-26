import _ from "lodash";

export const parseVidsPerDayHeatmap = (watchHistoryData) => {
  let data = watchHistoryData;

  const dataFilteredByYear = {};
  const years = _.uniqBy(_.map(data, (video) => video.time.year()));

  // Filter by years.
  _.forEach(years, (year) => {
    dataFilteredByYear[year] = _.filter(data, (video) => video.time.year() === year);
  });

  _.mapValues(dataFilteredByYear, (dta, year) => {
    dataFilteredByYear[year] = dta.map((d) => ({
      ...d,
      time: d.time.format("YYYY-MM-DD"),
    }));

    dataFilteredByYear[year] = _.map(_.countBy(dataFilteredByYear[year], "time"), (val, date) => ({
      date,
      total: val,
    }));
  });

  _.mapValues(dataFilteredByYear, (dta, year) => {
    dataFilteredByYear[year] = dta.map((d) => [d.date, d.total]);
  });

  return dataFilteredByYear["2021"];
};
