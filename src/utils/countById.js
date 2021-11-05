// import _ from "lodash";
// import moment from "moment";

// export const countByVideoId = (data) => {
//   data = [
//     ...data
//       .reduce((mp, o) => {
//         if (!mp.has(o.videoId)) mp.set(o.videoId, { ...o, count: 0 });
//         mp.get(o.videoId).count++;
//         return mp;
//       }, new Map())
//       .values(),
//   ];

//   data = _.sortBy(data, (e) => e.count);

//   return data;
// };

// export const countByChannelId = (data) => {
//   // data = [
//   //   ...data
//   //     .reduce((mp, o) => {
//   //       if (!mp.has(o.channelId))
//   //         mp.set(o.channelId, {
//   //           channelId: o.channelId,
//   //           count: 0,
//   //         });
//   //       mp.get(o.channelId).count++;
//   //       return mp;
//   //     }, new Map())
//   //     .values(),
//   // ];

//   let realData = [];
//   // data = _.sortBy(data, (e) => e.count);

//   // for (let i = 2; i <= Math.round(data.length / 50, 2); i++) {
//   // let dta = data.slice(-(i * 50), -(i * 50 - 50));
//   // let dta = data.slice(-50);
//   // const channelIdList = JSON.stringify(dta.map((channel) => channel.channelId))
//   //   .slice(1, -1)
//   //   .replace(/['"]+/g, "")
//   //   .replace(/[,]+/g, "%2C");

//   // const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,topicDetails&id=${channelIdList}&key=AIzaSyD4uuC7dAqVXJMRHdfZF0QwMJZ2kjb49Rs`;

//   // fetch(url)
//   //   .then((res) => res.json())
//   //   .then((res) => {
//   //     res = res.items.map((channel) => {
//   //       const { title, customUrl, thumbnails, publishedAt } = channel.snippet;
//   //       const { subscriberCount, videoCount, viewCount } = channel.statistics;

//   //       let categories;
//   //       try {
//   //         categories = channel.topicDetails.topicCategories.map((category) =>
//   //           category.slice(30)
//   //         );
//   //       } catch {
//   //         categories = undefined;
//   //       }

//   //       return {
//   //         channelId: channel.id,
//   //         kind: channel.kind,
//   //         title,
//   //         customUrl,
//   //         thumbnail: thumbnails.default.url,
//   //         publishedAt: moment(publishedAt),
//   //         subscriberCount: _.toNumber(subscriberCount),
//   //         videoCount: _.toNumber(videoCount),
//   //         viewCount: _.toNumber(viewCount),
//   //         categories,
//   //       };
//   //     });

//   //     console.log(res);

//   // dta = _.merge(_.keyBy(data, "channelId"), _.keyBy(res, "channelId"));
//   // realData.push(res);
//   // });
//   // }

//   return realData;
// };
