import json
from flask import Flask
from flask_cors import CORS # Not for production
from routes import *


app = Flask(__name__)
CORS(app) # Not for production

# Routes
app.register_blueprint(routes)


if __name__ == '__main__':
    app.run(debug=True)
