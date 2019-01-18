from . import create_app, socketio

app = create_app()

if __name__ == '__main__':
    socketio.run(app)

@app.route('/')
def hello_world():
    app.logger.info("hello world!")
    return 'Hi!'