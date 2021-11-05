// const fetchYoutubeApiData = (dta) => {
//   const API_KEY = "AIzaSyD4uuC7dAqVXJMRHdfZF0QwMJZ2kjb49Rs";
//   let finalData = [];

//   // _.chunk(dta, 50).map((data) => {
//   const data = dta.slice(-50);

//   const videoIds = JSON.stringify(data.map((dta) => dta.videoId))
//     .slice(1, -1)
//     .replace(/['"]+/g, "")
//     .replace(/[,]+/g, "%2C");

//   const URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,topicDetails&id=${videoIds}&key=${API_KEY}`;

//   fetch(URL)
//     .then((res) => res.json())
//     .then((res) => {
//       // res.items.map((item) => {
//       //   const {
//       //     channelId,
//       //     channelTitle,
//       //     defaultLanguage,
//       //     description,
//       //     publishedAt,
//       //     tags,
//       //     thumbnails,
//       //     title,
//       //   } = item.snippet;
//       //   const { commentCount, dislikeCount, likeCount, viewCount } =
//       //     item.statistics;

//       //   let topicCategories;
//       //   try {
//       //     topicCategories = item.topicDetails.topicCategories.map((category) =>
//       //       category.slice(30)
//       //     );
//       //   } catch {
//       //     topicCategories = undefined;
//       //   }

//       //   finalData.push({
//       //     channelId,
//       //     channelTitle,
//       //     defaultLanguage,
//       //     description,
//       //     publishedAt: moment(publishedAt),
//       //     tags,
//       //     thumbnail: thumbnails.standard,
//       //     title,
//       //     commentCount: _.toNumber(commentCount),
//       //     dislikeCount: _.toNumber(dislikeCount),
//       //     likeCount: _.toNumber(likeCount),
//       //     viewCount: _.toNumber(viewCount),
//       //     topicCategories,
//       //   });
//       // });
//       finalData.push(res);
//     });
//   // });

//   return finalData;
// };
