exports.clientConnected = function (webSocketContext) {
    global.log.info("socketRoute", "clientConnected", "hello client")
}

exports.clientDisconnected = function () {
    global.log.info("socketRoute", "clientDisconnected", "client disconnected")
}

exports.message = function(message) {
    global.log.debug("socketRoute", "message", "feedback data: " + message)
}

exports.init = function (serverApp) {
    // webSocketServer.on("connection", this.onClientConnected)
    const clientConnected = this.clientConnected
    const clientMessage = this.message
    const clientDisconnected = this.clientDisconnected

    serverApp.ws('/remote', function (webSocketContext) {
        clientConnected(webSocketContext)
        webSocketContext.on("close", clientDisconnected)
        webSocketContext.on("message", clientMessage)
    })
}