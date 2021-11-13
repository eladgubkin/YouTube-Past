import _ from "lodash";
import moment from "moment";

export const parseChannelBubblesData = (watchHistoryData) => {
  let data = [];

  data = _.map(
    _.countBy(
      watchHistoryData.map((video) => ({
        channelId: video.channelId,
      })),
      "channelId"
    ),
    (val, channelId) => ({
      channelId: channelId,
      count: val,
    })
  );

  data = _.sortBy(data, (e) => e.count).slice(-15);
  const newData = [];

  _.chunk(data, 50).map((dta) => {
    const channelIds = JSON.stringify(dta.map((dta) => dta.channelId))
      .slice(1, -1) // Remove "[" and "]"
      .replace(/['"]+/g, "") // Remove any quotes
      .replace(/[,]+/g, "%2C"); // Replace "," with "%2C"

    const API_KEY = "AIzaSyD4uuC7dAqVXJMRHdfZF0QwMJZ2kjb49Rs";
    const URL = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,topicDetails&id=${channelIds}&key=${API_KEY}`;

    fetch(URL)
      .then((res) => res.json())
      .then(({ items }) => {
        items.map(({ id, snippet }) => {
          const { title, thumbnails } = snippet;

          return data.map((dta) => {
            if (dta.channelId === id) {
              dta.title = title;
              dta.thumbnail = thumbnails.default.url;
            }
          });
        });
      });
  });

  return data;
};
