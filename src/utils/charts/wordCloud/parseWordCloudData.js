import _ from "lodash";
import { removeStopwords } from "./removeStopwords";

export const parseWordCloudData = (searchHistoryData) => {
  let data = [];

  data = searchHistoryData.map((query) => ({
    year: query.time.year(),
    month: query.time.month(),
    words: _.without(
      query.words.map((word) => removeStopwords(word)),
      ""
    ),
  }));

  // return _.filter(data, (o) => o.year === 2017);
  return data;
};
