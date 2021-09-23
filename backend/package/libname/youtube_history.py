import sys
import pandas as pd
import numpy as np

class Data:
    def __init__(self):
        self.df = []

    def read_data(self):
        try:
            filename = sys.argv[1]
        except IndexError:
            print('filename must be an argument')

        # read json as records list
        self.df = pd.read_json(filename, orient='records')

        return self.df


    def parse_data(self):
        # exclude 'Visited YouTube Music' title
        self.df = self.df.drop(self.df[self.df['title'] == 'Visited YouTube Music'].index)

        # replace NaN values with zeros
        self.df = self.df.replace(np.nan, 0)

        # if no 'subtitles' add subtitles of None but still iterable - [{"name": None, "url": None}]
        self.df['subtitles'] = [[{"name": None, "url": None}] if subtitle == 0 else subtitle for subtitle in self.df.subtitles]

        # destruct 'subtitles' to "channelName" and "channelUrl"
        self.df['channelName'], self.df['channelUrl'] = zip(*self.df['subtitles'].map(lambda channel: (channel[0]['name'], channel[0]['url'])))

        # exclude YouTube Ads, products and subtitles (after destruct subtitles)
        self.df = self.df.drop(columns=['products', 'details', 'subtitles'], errors='ignore')

        # remove "watched" from every beginning of title
        self.df['title'] = self.df['title'].str[8:]

        # count the frequency that 'titleUrl' and 'channelUrl' occurs
        self.df['timesViewedVideo'] = self.df.groupby(['titleUrl'])['titleUrl'].transform('count')
        self.df['timesViewedChannel'] = self.df.groupby(['channelUrl'])['channelUrl'].transform('count')

        # Sort by timesViewedVideo
        self.df = self.df.sort_values(by=['timesViewedVideo'], ascending=True)

        # get Video ID from 'titleUrl'
        self.df['videoId'] = self.df['titleUrl'].str[-11:]

        # get Channel ID from 'channelUrl'
        self.df['channelId'] = self.df['channelUrl'].str[-24:]

        with pd.option_context('display.max_rows', None, 'display.max_columns', None):
            print(list(self.df))


    def get_data(self):
        # serve json as records list
        self.df = self.df.to_json(orient='records')
        return self.df



data = Data()

data.read_data()
data.parse_data()


