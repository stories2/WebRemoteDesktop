exports.clientConnected = function (webSocketContext) {
    global.log.info("socketRoute", "clientConnected", "hello client")

    webSocketContext.on("close", this.clientDisconnected)
    webSocketContext.on("feedback", this.feedback)
}

exports.clientDisconnected = function () {
    global.log.info("socketRoute", "clientDisconnected", "client disconnected")
}

exports.feedback = function(feedback) {
    global.log.debug("socketRoute", "feedback", "feedback data: " + JSON.stringify(feedback))
}

exports.init = function (serverApp) {
    // webSocketServer.on("connection", this.onClientConnected)
    serverApp.ws('/remote', this.clientConnected)
}