import _ from "lodash";
import moment from "moment";

export const cleanWatchHistoryParse = (fileContent) => {
  let data = JSON.parse(fileContent);

  // Remove videos if title === "Visited YouTube Music" (Ads)
  _.remove(data, (video) => video.title === "Visited YouTube Music");

  // Remove videos if header === 'YouTube Music'
  _.remove(data, (video) => video.header === "YouTube Music");

  // Remove videos which have no "subtitles" property (google ads, deleted videos, etc..)
  _.remove(data, (video) => (video.subtitles === undefined ? video : null));

  // Data formatting
  data = _.map(data, (video) => {
    return {
      header: video.header,
      time: moment(video.time),
      videoId: video.titleUrl.slice(-11),
      channelId: video.subtitles[0].url.slice(-24),
    };
  });

  // Remove ["subtitles", "products", "header"] property from each video
  data = _.map(data, (video) => _.omit(video, ["subtitles", "products", "header"]));

  return fetchYoutubeApiData(data);
};

const fetchYoutubeApiData = (dta) => {
  const API_KEY = "AIzaSyD4uuC7dAqVXJMRHdfZF0QwMJZ2kjb49Rs";
  let finalData = [];

  _.chunk(dta, 50).map((data) => {
    const videoIds = JSON.stringify(data.map((dta) => dta.videoId))
      .slice(1, -1)
      .replace(/['"]+/g, "")
      .replace(/[,]+/g, "%2C");

    const URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,topicDetails&id=${videoIds}&key=${API_KEY}`;

    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        // res.items.map((item) => {
        //   const {
        //     channelId,
        //     channelTitle,
        //     defaultLanguage,
        //     description,
        //     publishedAt,
        //     tags,
        //     thumbnails,
        //     title,
        //   } = item.snippet;
        //   const { commentCount, dislikeCount, likeCount, viewCount } =
        //     item.statistics;

        //   let topicCategories;
        //   try {
        //     topicCategories = item.topicDetails.topicCategories.map((category) =>
        //       category.slice(30)
        //     );
        //   } catch {
        //     topicCategories = undefined;
        //   }

        //   finalData.push({
        //     channelId,
        //     channelTitle,
        //     defaultLanguage,
        //     description,
        //     publishedAt: moment(publishedAt),
        //     tags,
        //     thumbnail: thumbnails.standard,
        //     title,
        //     commentCount: _.toNumber(commentCount),
        //     dislikeCount: _.toNumber(dislikeCount),
        //     likeCount: _.toNumber(likeCount),
        //     viewCount: _.toNumber(viewCount),
        //     topicCategories,
        //   });
        // });
        finalData.push("lol");
      });
  });

  return finalData;
};
