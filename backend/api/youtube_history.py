import pandas as pd
import sys
from .watch_history import WatchHistory
from .search_history import SearchHistory


class YoutubeHistory(WatchHistory, SearchHistory):
    def __init__(self):
        self.watch_df = []
        self.search_df = []
        WatchHistory.__init__(self, self.watch_df)
        SearchHistory.__init__(self, self.search_df)
        self.merged = {}

    def read_file(self):
        try:
            watch_history_file, search_history_file = sys.argv[1:]
        except IndexError and ValueError:
            print("first argument: 'watch-history.json', second argument: 'search-history.json'")
            quit()

        try:
            self.watch_df = pd.read_json(watch_history_file, orient='records')
            self.search_df = pd.read_json(search_history_file, orient='records')
        except ValueError:
            print('Wrong files')
            quit()

        return


    def merge_dfs(self):
        self.merged = {
            "watchHistory": self.watch_df.to_json(orient='records'),
            "searchHistory": self.search_df.to_json(orient='records')
        }

        return self.merged


    def get_data(self):
        self.read_file()
        self.parse_watch_history_data()
        self.parse_search_history_data()
        return self.merge_dfs()

