from flask import Flask
from Route.appSocket import appSocket

def create_app():
    app = Flask(__name__)
    app.register_blueprint(appSocket, url_prefix='/socket')
    app.debug = True

    return app