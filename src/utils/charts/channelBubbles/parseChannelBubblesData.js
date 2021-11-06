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

  data = _.sortBy(data, (e) => e.count).slice(-100);

  _.chunk(data, 50).map((dta) => {
    const channelIds = JSON.stringify(dta.map((dta) => dta.channelId))
      .slice(1, -1) // Remove "[" and "]"
      .replace(/['"]+/g, "") // Remove any quotes
      .replace(/[,]+/g, "%2C"); // Replace "," with "%2C"

    const API_KEY = "AIzaSyD4uuC7dAqVXJMRHdfZF0QwMJZ2kjb49Rs";
    const URL = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,topicDetails&id=${channelIds}&key=${API_KEY}`;

    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        res.items.map((channel) => {
          const { title, customUrl, thumbnails, publishedAt } = channel.snippet;
          const { subscriberCount, videoCount, viewCount } = channel.statistics;
          const { topicCategories } = channel.topicDetails;

          data.push({
            channelId: channel.id,
            title,
            thumbnail: thumbnails.default.url,
            // customUrl,
            // publishedAt: moment(publishedAt),
            // subscriberCount: _.toNumber(subscriberCount),
            // videoCount: _.toNumber(videoCount),
            // viewCount: _.toNumber(viewCount),
            // categories: topicCategories.map((category) => category.slice(30)),
          });
        });
      });
  });

  return data;
};
