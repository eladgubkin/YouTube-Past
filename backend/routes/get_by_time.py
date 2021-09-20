from flask import jsonify, request
from . import routes
from get_json_data import get_json_data
from datetime import datetime, timedelta


@routes.route('/time')
def get_by_time():
    timestamp = request.args.to_dict()
    data = get_json_data()
    videos = []

    for video in data:
        # Convert datetime string to datetime format:
        try:
            watched_date = datetime.strptime((video['time']), '%Y-%m-%dT%H:%M:%S.%fZ')
        except ValueError: 
            watched_date = datetime.strptime((video['time']), '%Y-%m-%dT%H:%M:%S%fZ')

        # By Day
        if timestamp['day'] == str(watched_date.day) and timestamp['month'] == str(watched_date.month) and timestamp['year'] == str(watched_date.year):
            videos.append(video)

        # By Month
        if timestamp['day'] == 'null' and timestamp['month'] == str(watched_date.month) and timestamp['year'] == str(watched_date.year):
            videos.append(video)

        # By Year
        if timestamp['day'] == 'null' and timestamp['month'] == 'null' and timestamp['year'] == str(watched_date.year):
            videos.append(video)

        
    return jsonify(videos)

    
