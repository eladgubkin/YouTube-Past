from flask import Flask
from flask_cors import CORS
from api import YoutubeHistory

app = Flask(__name__)
CORS(app)


@app.route('/', methods=["POST"])
def get_data():
    data = YoutubeHistory().get_data()

    return data

if __name__ == '__main__':
    app.run(debug=True)
