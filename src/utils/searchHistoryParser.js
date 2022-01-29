import _ from "lodash"; // Lodash.js
import moment from "moment"; // Moment.js

export const searchHistoryParser = (file, setState) => {
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = () => {
    let data = JSON.parse(reader.result);

    // Remove "details" property (google ads)
    _.remove(data, (query) => (query.details !== undefined ? query : null));

    // Remove searches if header === 'YouTube Music'
    _.remove(data, (video) => video.header === "YouTube Music");

    // Remove ["products", "titleUrl"] property
    data = _.map(data, (query) => _.omit(query, ["products", "titleUrl"]));

    // Data formatting
    data = _.map(data, (query) => {
      return {
        time: moment(query.time),
        words: query.title
          .slice(_.startsWith(query.title, "Searched for") ? 13 : 6) // EN / HE
          .replace(/[^a-zA-Z ]/g, "") // Remove all special chars
          .trim()
          .toLowerCase()
          .split(" "),
      };
    });

    // setState
    setState(data);
  };
};
