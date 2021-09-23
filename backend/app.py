import json
from flask import Flask
from flask_cors import CORS
from routes import *

app = Flask(__name__)
CORS(app)

# Routes
app.register_blueprint(routes)


if __name__ == '__main__':
    app.run(debug=True)
