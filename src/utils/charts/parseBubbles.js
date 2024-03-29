import _ from "lodash";

export const parseBubbles = (watchHistoryData) => {
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
      selfViewCount: val,
    })
  );

  data = _.sortBy(data, (e) => e.selfViewCount).slice(-50);

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
        items.map(({ id, snippet, statistics }) => {
          const { title, thumbnails } = snippet;

          data.map((dta) => {
            if (dta.channelId === id) {
              dta.title = title;
              dta.thumbnail = thumbnails.default.url;
              dta.viewCount = statistics.viewCount;
            }
          });
        });
      });
  });

  return data;
};
