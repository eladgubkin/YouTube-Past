import _ from "lodash";
import moment from "moment";

export const parseChannelBubbleData = (watchHistoryData) => {
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

  data = _.sortBy(data, (e) => e.count).slice(-50);

  const channelIds = JSON.stringify(data.map((dta) => dta.channelId))
    .slice(1, -1)
    .replace(/['"]+/g, "")
    .replace(/[,]+/g, "%2C");

  const API_KEY = "AIzaSyD4uuC7dAqVXJMRHdfZF0QwMJZ2kjb49Rs";
  const URL = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,topicDetails&id=${channelIds}&key=${API_KEY}`;

  fetch(URL)
    .then((res) => res.json())
    .then((res) => {
      res.items.map((channel) => {
        const { title, customUrl, thumbnails, publishedAt } = channel.snippet;
        const { subscriberCount, videoCount, viewCount } = channel.statistics;

        let categories;
        try {
          categories = channel.topicDetails.topicCategories.map((category) =>
            category.slice(30)
          );
        } catch {
          categories = undefined;
        }

        data.push({
          channelId: channel.id,
          kind: channel.kind,
          title,
          customUrl,
          thumbnail: thumbnails.default.url,
          publishedAt: moment(publishedAt),
          subscriberCount: _.toNumber(subscriberCount),
          videoCount: _.toNumber(videoCount),
          viewCount: _.toNumber(viewCount),
          categories,
        });
      });
    });

  return data;
};
