from flask import jsonify, request
from . import routes
import json

filename = './watch-history.json'

@routes.route('/channel')
def get_by_channel():

    channel_name = request.args.get('name')

    with open(filename, encoding='utf-8') as json_data:
        data = json.load(json_data)

        videos = []

        for video in data:
            try:
                if video['subtitles'][0]['name'] == channel_name:
                    videos.append(video)
            except KeyError:
                continue

    return jsonify(videos)
