import pandas as pd
import os 
dir_path = os.path.dirname(os.path.realpath(__file__))

class SearchHistory:
    def __init__(self, search_df):
        self.search_df = search_df


    def parse_search_history_data(self):
        # exclude 'Google Ads'
        try:
            self.search_df = self.search_df.drop(self.search_df[self.search_df['details'].notna()].index)
        except KeyError:
            pass

        # exclude 'products' and 'titleUrls'
        self.search_df = self.search_df.drop(columns=['products', 'details', 'titleUrl'], errors='ignore')

        # remove "Searched for" from every beginning of title
        self.search_df['title'] = self.search_df['title'].str[13:]

        # these are stopwords - words we want excluded from our data
        with open(f'{dir_path}/data/stopwords.txt', encoding="utf8") as file:
            stop_words=file.read().split('\n')

        # remove any rows where the 'title' field is null
        self.search_df = self.search_df[pd.notnull(self.search_df['title'])]

        # use regex to remove any special characters and lower all to lowercase.
        self.search_df['title'] = self.search_df['title'].str.lower().str.replace("(\\d|\\W)+", " ", regex=True).str.strip()

        # remove any word that is in the stopword list
        self.search_df['title'] = self.search_df['title'].apply(lambda x: ' '.join([word for word in x.split() if word not in stop_words])).str.split(' ')

        # rename 'title' column to 'words'
        self.search_df.rename({'title': 'words'}, axis=1, inplace=True)

        return self.search_df
