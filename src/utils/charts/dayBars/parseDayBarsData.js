import _ from "lodash";

export const parseDayBarsData = (watchHistoryData) => {
  let data = [];

  data = watchHistoryData.map((video) => ({
    year: video.time.year(),
    month: video.time.month(),
    day: video.time.day(),
    date: video.time.date(),
    videoId: video.videoId,
  }));

  let dataByYear = {};
  let dataByMonth = {};
  let dataByDates = {};

  const years = _.uniqBy(_.map(data, (dta) => dta.year));
  const months = _.uniqBy(_.map(data, (dta) => dta.month));
  const days = _.uniqBy(_.map(data, (dta) => dta.day));
  const dates = _.uniqBy(_.map(data, (dta) => dta.date));

  // Filter by years
  _.forEach(years, (year) => {
    dataByYear[year] = _.filter(data, (o) => o.year === year);
  });

  // Filter by months
  _.mapValues(dataByYear, (dta, year) => {
    months.map((month) => {
      dataByMonth[year] = {
        ...dataByMonth[year],
        [month]: _.filter(dta, (o) => o.month === month),
      };
    });
  });

  // Filter by dates
  // _.mapValues(dataByMonth, (dta, year) => {
  //   _.mapValues(dta, (d, month) => {
  //     dates.map((date) => {
  //       dataByDates[year] = {
  //         ...dataByDates[year],
  //         [month]: {
  //           ...dataByDates[year[month]],
  //           [date]: _.filter(d, (o) => o.date === date),
  //         },
  //       };
  //     });
  //   });
  // });

  return dataByMonth;
};
