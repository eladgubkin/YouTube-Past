import _ from "lodash";
import moment from "moment";

export const searchHistoryParse = (fileContent) => {
  let data = JSON.parse(fileContent);

  // Remove "details" property (google ads)
  _.remove(data, (query) => (query.details !== undefined ? query : null));

  // Remove ["products", "titleUrl"] property
  data = _.map(data, (query) => _.omit(query, ["products", "titleUrl"]));

  // Data formatting
  data = _.map(data, (query) => {
    return {
      time: moment(query.time),
      header: query.header,
      words: query.title
        .slice(_.startsWith(query.title, "Searched for") ? 13 : 6) // EN / HE
        .replace(/[^a-zA-Z ]/g, "") // Remove all special chars
        .trim()
        .toLowerCase()
        .split(" "),
    };
  });

  return data;
};
