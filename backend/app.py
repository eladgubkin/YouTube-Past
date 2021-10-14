from flask import Flask, request, jsonify, session
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret'
CORS(app)


@app.route('/file/upload', methods=['POST'])
def handle_file_upload():
    # file = request.files['file']
    # session[file.filename] = pd.read_json(file)
    session['username'] = 'admin'
    print(session)


    return "", 201



@app.route('/', methods=['GET'])
def hello_world():
    print(session)
    return jsonify("Lol"), 201


if __name__ == '__main__':
    app.run(debug=True)