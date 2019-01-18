exports.hello = function (request, response) {
    global.log.debug("publicRoute", "hello", "hi")
    response.send("ok")
}