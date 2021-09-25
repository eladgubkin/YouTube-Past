from flask import Flask, jsonify, request
from flask_cors import CORS
from api.youtube_history import YoutubeHistory


app = Flask(__name__)
CORS(app)


@app.route('/')
def Data():
    data = YoutubeHistory().get_data()

    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
