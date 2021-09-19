import json
from flask import Flask, jsonify
import random

filename = '../../../Desktop/watch-history.json'
app = Flask(__name__)


@app.route('/')
def hello_world():
    return '<h1>Hello, World!</h1>'


@app.route('/random-video')
def random_video():
    with open(filename) as json_data:
        data = json.load(json_data)
        video = json.dumps(random.choice(data), indent=2)

    return jsonify(video)


if __name__ == '__main__':
    app.run()
