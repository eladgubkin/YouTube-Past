from flask import Flask, jsonify
from flask_cors import CORS
from api.youtube_history import YoutubeHistory
import random


app = Flask(__name__)
CORS(app)

data = YoutubeHistory().get_data()

@app.route('/')
def Index():
    return jsonify(random.choice(data['watchHistory']))

if __name__ == '__main__':
    app.run(debug=True)
