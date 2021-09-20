from flask import jsonify, request
from . import routes
from get_json_data import get_json_data


@routes.route('/channel')
def get_by_channel():

    channel_name = request.args.get('name')
    data = get_json_data()
    videos = []

    for video in data:
        try:
            if video['subtitles'][0]['name'] == channel_name:
                videos.append(video)
        except KeyError:
            continue

    return jsonify(videos)
