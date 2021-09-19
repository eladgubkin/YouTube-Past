from flask import jsonify
from . import routes
import random
import json

filename = './watch-history.json'

@routes.route("/random")
def random_video():
    with open(filename, encoding='utf-8') as json_data:
        data = json.load(json_data)

        video = json.dumps(random.choice(data), indent=2)

    return jsonify(video)