from flask import Blueprint, current_app
from App import socketio
appSocket = Blueprint('socket', __name__)

@appSocket.route('/')
def index():
    return "socket"

@socketio.on('screen', namespace='/remote')
def client_screen(screen) :
    current_app.logger.info("screen data accepted from client")
    return "ok"

@socketio.on('feedback', namespace='/remote')
def client_feedback(feedback):
    current_app.logger.info("feedback data accepted from client")
    return "ok"

@socketio.on('connect', namespace='/remote')
def client_connect():
    current_app.logger.info("client connected")
    return "ok"

@socketio.on('disconnect', namespace='/remote')
def client_disconnect():
    current_app.logger.info("client disconnected")
    return "ok"