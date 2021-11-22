import _ from "lodash";

export const parseDayBarsData = (watchHistoryData) => {
  let data = [];

  data = watchHistoryData.map((video) => ({
    year: video.time.year(),
    month: video.time.month(),
    date: video.time.date(),
    day: video.time.day(),
    videoId: video.videoId,
  }));

  const dataFilteredByYear = {};
  const dataFilteredByMonth = {};
  const dataFilteredByDate = {};
  const dataFilteredByDay = {};

  const years = _.uniqBy(_.map(data, (dta) => dta.year));
  const months = _.uniqBy(_.map(data, (dta) => dta.month));
  const dates = _.uniqBy(_.map(data, (dta) => dta.date));
  const days = _.uniqBy(_.map(data, (dta) => dta.day));

  // Filter by years.
  _.forEach(years, (year) => {
    dataFilteredByYear[year] = _.filter(data, (o) => o.year === year);
  });

  // Filter by months and years.
  _.mapValues(dataFilteredByYear, (dta, year) => {
    months.map((month) => {
      dataFilteredByMonth[year] = {
        ...dataFilteredByMonth[year],
        [month]: _.filter(dta, (o) => o.month === month),
      };
    });
  });

  // Filter by dates, months and years.
  _.mapValues(dataFilteredByMonth, (dta, year) => {
    dataFilteredByDate[year] = _.mapValues(dta, (d) => {
      const month = {};
      dates.forEach((date) => {
        month[date] = _.filter(d, (o) => o.date === date);
      });
      return month;
    });
  });

  // Filter by day of week in a year.
  _.mapValues(dataFilteredByYear, (dta, year) => {
    days.map((day) => {
      dataFilteredByDay[year] = {
        ...dataFilteredByDay[year],
        [day]: _.filter(dta, (o) => o.day === day),
      };
    });
  });

  return dataFilteredByMonth;
};
