import _ from "lodash";
import moment from "moment";

export const parseWatchHistoryFile = (file, setWatchHistoryData) => {
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = () => {
    let data = JSON.parse(reader.result);

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

    // setState
    setWatchHistoryData(data);
  };
};
