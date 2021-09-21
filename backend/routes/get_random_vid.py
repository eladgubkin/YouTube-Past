from flask import jsonify
from . import routes
import random
from get_json_data import get_json_data

@routes.route("/random")
def random_video():
    data = get_json_data('watch-history')
    video = random.choice(data)

    return jsonify(video)