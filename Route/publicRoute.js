exports.hello = function (request, response) {
    global.log.debug("publicRoute", "hello", "hi")
    response.render("Shared/_MasterLayout.html")
}

exports.getTemplate = function (request, response) {
    var requestTemplate = request.params.template
    global.log.debug("publicRoute", "getTemplate", "template: " + requestTemplate)
    response.render("Templates/" + requestTemplate + ".html")
}