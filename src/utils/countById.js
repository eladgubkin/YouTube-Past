import _ from "lodash";

export const countByVideoId = (dta) => {
  let data = dta;

  data = [
    ...data
      .reduce((mp, o) => {
        if (!mp.has(o.videoId)) mp.set(o.videoId, { ...o, videoCount: 0 });
        mp.get(o.videoId).videoCount++;
        return mp;
      }, new Map())
      .values(),
  ];

  data = _.sortBy(data, (e) => e.videoCount);

  return data;
};

export const countByChannelId = (dta) => {
  let data = dta;

  data = [
    ...data
      .reduce((mp, o) => {
        if (!mp.has(o.channelId))
          mp.set(o.channelId, {
            channelId: o.channelId,
            channelTitle: o.channelTitle,
            header: o.header,
            channelCount: 0,
          });
        mp.get(o.channelId).channelCount++;
        return mp;
      }, new Map())
      .values(),
  ];

  data = _.sortBy(data, (e) => e.channelCount);

  return data;
};
