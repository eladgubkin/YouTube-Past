import json

file_name = './watch-history.json'


def get_json_data():
    with open(file_name, encoding='utf-8') as json_data:
        data = json.load(json_data)

    return data

