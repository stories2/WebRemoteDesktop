from flask import Blueprint
appSocket = Blueprint('socket', __name__)

@appSocket.route('/')
def index():
    return "socket"
