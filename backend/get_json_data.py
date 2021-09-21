import json

def get_json_data(history):

    filename = f'./{history}.json'

    with open(filename, encoding='utf-8') as json_data:
        data = json.load(json_data)

    return data

