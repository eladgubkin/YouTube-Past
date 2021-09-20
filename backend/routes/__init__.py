from flask import Blueprint

routes = Blueprint('routes', __name__)

from .get_random_vid import *
from .get_by_channel import * 
from .get_by_time import *
from .get_by_most_views import *
