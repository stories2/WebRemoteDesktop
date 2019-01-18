exports.ok = function(response, msg) {
    this.response(response, global.define.HEADERS_CONTENT_TYPE_APPLICATION_JSON, global.define.HTTP_STATUS_CODE_OK, JSON.stringify(msg))
}

exports.badRequest = function(response, msg) {
    this.response(response, global.define.HEADERS_CONTENT_TYPE_APPLICATION_JSON, global.define.HTTP_STATUS_CODE_BAD_REQUEST, JSON.stringify(msg))
}

exports.unauthorized = function(response, msg) {
    this.response(response, global.define.HEADERS_CONTENT_TYPE_APPLICATION_JSON, global.define.HTTP_STATUS_CODE_UNAUTHORIZED, JSON.stringify(msg))
}

exports.internalServerError = function(response, msg) {
    this.response(response, global.define.HEADERS_CONTENT_TYPE_APPLICATION_JSON, global.define.HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR, JSON.stringify(msg))
}

exports.response = function(response, type, code, msgStr) {
    response.setHeader(global.define.HEADERS_CONTENT_TYPE, type)
    response.status(code).send(msgStr)
}