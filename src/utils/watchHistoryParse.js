import _ from "lodash";
import moment from "moment";

export const watchHistoryParse = (fileContent) => {
  let data = JSON.parse(fileContent);

  // Remove videos if title === "Visited YouTube Music" (Ads)
  _.remove(data, (video) => video.title === "Visited YouTube Music");

  // Remove videos which have no "subtitles" property (google ads, deleted videos, etc..)
  _.remove(data, (video) => (video.subtitles === undefined ? video : null));

  // Data formatting
  data = _.map(data, (video) => {
    return {
      header: video.header,
      time: moment(video.time),
      videoTitle: video.title.slice(_.startsWith(video.title, "Watched") ? 8 : 12), // EN / HE
      channelTitle: video.subtitles[0].name,
      videoId: video.titleUrl.slice(-11),
      channelId: video.subtitles[0].url.slice(-24),
    };
  });

  // Remove ["subtitles", "products"] property from each video
  data = _.map(data, (video) => _.omit(video, ["subtitles", "products"]));

  return data;
};
