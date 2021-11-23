import _ from "lodash";

export const parseDayBarsData = (watchHistoryData) => {
  let data = watchHistoryData;

  const dataFilteredByYear = {};
  const dataFilteredByMonth = {};
  const dataFilteredByDate = {};
  const dataFilteredByDay = {};

  const years = _.uniqBy(_.map(data, (video) => video.time.year()));
  const months = _.uniqBy(_.map(data, (video) => video.time.month()));
  const dates = _.uniqBy(_.map(data, (video) => video.time.date()));
  const days = _.uniqBy(_.map(data, (video) => video.time.day()));

  // Filter by years.
  _.forEach(years, (year) => {
    dataFilteredByYear[year] = _.filter(data, (video) => video.time.year() === year);
  });

  // Filter by months and years.
  _.mapValues(dataFilteredByYear, (dta, year) => {
    months.map((month) => {
      dataFilteredByMonth[year] = {
        ...dataFilteredByMonth[year],
        [month]: _.filter(dta, (video) => video.time.month() === month),
      };
    });
  });

  // Filter by dates, months and years.
  _.mapValues(dataFilteredByMonth, (dta, year) => {
    dataFilteredByDate[year] = _.mapValues(dta, (d) => {
      const month = {};
      dates.forEach((date) => {
        month[date] = _.filter(d, (video) => video.time.date() === date);
      });
      return month;
    });
  });

  // Filter by day of week in a year.
  _.mapValues(dataFilteredByYear, (dta, year) => {
    days.map((day) => {
      dataFilteredByDay[year] = {
        ...dataFilteredByDay[year],
        [day]: _.filter(dta, (video) => video.time.day() === day),
      };
    });
  });

  return dataFilteredByDay;
};
