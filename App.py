from . import create_app
from logging.handlers import RotatingFileHandler
import logging, os
from flask_socketio import SocketIO

app = create_app()
socketio = SocketIO(app)

if __name__ == '__main__':
    handler = RotatingFileHandler('default.log', maxBytes=10000, backupCount=1)
    handler.setLevel(logging.INFO)
    app.logger.addHandler(handler)

    socketio.run(app)

@app.route('/')
def hello_world():
    app.logger.info("hello world!")
    return 'Hi!'

@socketio.on('screen', namespace='/remote')
def client_screen(screen) :
    app.logger.info("screen data accepted from client")
    return "ok"

@socketio.on('feedback', namespace='/remote')
def client_feedback(feedback):
    app.logger.info("feedback data accepted from client")
    return "ok"

@socketio.on('connect', namespace='/remote')
def client_connect():
    app.logger.info("client connected")
    return "ok"

@socketio.on('disconnect', namespace='/remote')
def client_disconnect():
    app.logger.info("client disconnected")
    return "ok"