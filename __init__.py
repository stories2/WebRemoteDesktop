from flask import Flask, render_template
from logging.handlers import RotatingFileHandler
from flask_socketio import SocketIO
from Route.appSocket import appSocket
import logging, os

socketio = SocketIO()

def create_app():
    app = Flask(__name__)
    app.register_blueprint(appSocket, url_prefix='/socket')

    handler = RotatingFileHandler('default.log', maxBytes=10000, backupCount=1)
    handler.setLevel(logging.INFO)
    app.logger.addHandler(handler)

    app.debug = True

    socketio.init_app(app)

    return app