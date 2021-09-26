import numpy as np


class WatchHistory:
    def __init__(self, watch_df):
        self.watch_df = watch_df


    def parse_watch_history_data(self):
        # exclude 'Visited YouTube Music' title
        self.watch_df = self.watch_df.drop(self.watch_df[self.watch_df['title'] == 'Visited YouTube Music'].index)

        # replace NaN values with zeros
        self.watch_df = self.watch_df.replace(np.nan, 0)

        # if no 'subtitles' add subtitles of None but still iterable (no error raisen) - [{"name": None, "url": None}]
        self.watch_df['subtitles'] = [[{"name": None, "url": None}] if subtitle == 0 else subtitle for subtitle in self.watch_df.subtitles]

        # destruct 'subtitles' to "channelName" and "channelUrl"
        self.watch_df['channelName'], self.watch_df['channelUrl'] = zip(*self.watch_df['subtitles'].map(lambda channel: (channel[0]['name'], channel[0]['url'])))

        # exclude YouTube Ads, products and subtitles (after destruct subtitles)
        self.watch_df = self.watch_df.drop(columns=['products', 'details', 'subtitles'], errors='ignore')

        # remove "watched" from every beginning of title
        self.watch_df['title'] = self.watch_df['title'].str[8:]

        # count the frequency that 'titleUrl' and 'channelUrl' occurs
        self.watch_df['timesViewedVideo'] = self.watch_df.groupby(['titleUrl'])['titleUrl'].transform('count')
        self.watch_df['timesViewedChannel'] = self.watch_df.groupby(['channelUrl'])['channelUrl'].transform('count')

        # Sort by timesViewedVideo
        # self.watch_df = self.watch_df.sort_values(by=['timesViewedChannel'], ascending=False)

        # get Video ID from 'titleUrl'
        self.watch_df['videoId'] = self.watch_df['titleUrl'].str[-11:]

        # get Channel ID from 'channelUrl'
        self.watch_df['channelId'] = self.watch_df['channelUrl'].str[-24:]

        return self.watch_df
