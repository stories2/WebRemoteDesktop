app.service("WRDAppService", function ($log, $http, $window, $mdToast) {

    var setToken = function (tokenVal) {
        $window.localStorage.setItem("token", tokenVal);
        printLogMessage("WRDAppService", "setToken", "update token: " + tokenVal, LOG_LEVEL_DEBUG);
    };
    var getToken = function () {
        var token = $window.localStorage.getItem("token");
        printLogMessage("WRDAppService", "getToken", "return token: " + token, LOG_LEVEL_DEBUG);
        return token == null || token === undefined ? undefined : token;
    };
    var removeToken = function () {
        $window.localStorage.removeItem("token");
        printLogMessage("WRDAppService", "removeToken", "token removed", LOG_LEVEL_INFO);
    };
    var showToast = function (text, delay) {
        $mdToast.show($mdToast.simple()
            .textContent(text)
            .position("top right")
            .hideDelay(delay));
    };

    var verb = function (className, methodName, message) {
        printLogMessage(className, methodName, message, LOG_LEVEL_VERBOSE)
    }

    var info = function (className, methodName, message) {
        printLogMessage(className, methodName, message, LOG_LEVEL_INFO)
    }

    var debug = function (className, methodName, message) {
        printLogMessage(className, methodName, message, LOG_LEVEL_DEBUG)
    }

    var warn = function (className, methodName, message) {
        printLogMessage(className, methodName, message, LOG_LEVEL_WARN)
    }

    var error = function (className, methodName, message) {
        printLogMessage(className, methodName, message, LOG_LEVEL_ERROR)
    }

    var printLogMessage = function (className, methodName, message, logLevel) {
        var logDateTime = new Date().toISOString();
        var logMsg = "" + logDateTime + " ";
        if (logLevel == LOG_LEVEL_VERBOSE) {
            logMsg = logMsg + "V: ";
            logMsg = logMsg + "[" + className + "] {" + methodName + "} (" + message + ")";
            $log.log(logMsg);
        }
        else if (logLevel == LOG_LEVEL_INFO) {
            logMsg = logMsg + "I: ";
            logMsg = logMsg + "[" + className + "] {" + methodName + "} (" + message + ")";
            $log.log(logMsg);
        }
        else if (logLevel == LOG_LEVEL_DEBUG) {
            logMsg = logMsg + "D: ";
            logMsg = logMsg + "[" + className + "] {" + methodName + "} (" + message + ")";
            $log.log(logMsg);
        }
        else if (logLevel == LOG_LEVEL_WARN) {
            logMsg = logMsg + "W: ";
            logMsg = logMsg + "[" + className + "] {" + methodName + "} (" + message + ")";
            $log.log(logMsg);
        }
        else if (logLevel == LOG_LEVEL_ERROR) {
            logMsg = logMsg + "E: ";
            logMsg = logMsg + "[" + className + "] {" + methodName + "} (" + message + ")";
            $log.warn(logMsg);
        }
        else {
            logMsg = logMsg + "W: ";
            logMsg = logMsg + "[" + className + "] {" + methodName + "} (" + message + ")";
            $log.error(logMsg);
        }
        return;
    };
    var deleteReq = function (url, data, successFunc, failFunc) {
        printLogMessage("WRDAppService", "deleteReq", "send data to url: " + url, LOG_LEVEL_INFO);
        // data["seconds"] = this.PreventCache()
        var token = getToken()

        if(token !== undefined) {
            $http.defaults.headers.common['Authorization'] = token
            printLogMessage("WRDAppService", "deleteReq", "request with token", LOG_LEVEL_INFO)
        }

        $http({
            method: "DELETE",
            dataType: 'json',
            url: url,
            cache: false,
            contentType: 'application/json',
            data: data,
            crossDomain: true,
            // headers: {
            //     "Authorization": token
            // },
            xhrFields: {
                withCredentials: false
            },
            beforeSend: function (xhr) {
                if (typeof token != 'undefined') {
                    printLogMessage("WRDAppService", "deleteReq", "auth: " + token, LOG_LEVEL_DEBUG);
                    xhr.setRequestHeader("Authorization", token);
                }
                else {
                    printLogMessage("WRDAppService", "deleteReq", "no token sending", LOG_LEVEL_WARN);
                }
            }
        })
            .then(function (receivedData) {
                printLogMessage("WRDAppService", "deleteReq", "data received successfully", LOG_LEVEL_INFO);
                successFunc(receivedData);
            })
            .catch(function (xhr, textStatus, errorThrown) {
                printLogMessage("WRDAppService", "deleteReq", "something has problem: " + textStatus, LOG_LEVEL_ERROR);
                failFunc(xhr.responseText, textStatus);
            });
    };
    var patchReq = function (url, data, successFunc, failFunc) {
        printLogMessage("WRDAppService", "patchReq", "send data to url: " + url, LOG_LEVEL_INFO);
        // data["seconds"] = this.PreventCache()
        var token = getToken()

        if(token !== undefined) {
            $http.defaults.headers.common['Authorization'] = token
            printLogMessage("WRDAppService", "patchReq", "request with token", LOG_LEVEL_INFO)
        }

        $http({
            method: "PATCH",
            dataType: 'json',
            url: url,
            cache: false,
            contentType: 'application/json',
            data: data,
            crossDomain: true,
            // headers: {
            //     "Authorization": token
            // },
            xhrFields: {
                withCredentials: false
            },
            beforeSend: function (xhr) {
                if (typeof token != 'undefined') {
                    printLogMessage("WRDAppService", "patchReq", "auth: " + token, LOG_LEVEL_DEBUG);
                    xhr.setRequestHeader("Authorization", token);
                }
                else {
                    printLogMessage("WRDAppService", "patchReq", "no token sending", LOG_LEVEL_WARN);
                }
            }
        })
            .then(function (receivedData) {
                printLogMessage("WRDAppService", "patchReq", "data received successfully", LOG_LEVEL_INFO);
                successFunc(receivedData);
            })
            .catch(function (xhr, textStatus, errorThrown) {
                printLogMessage("WRDAppService", "patchReq", "something has problem: " + textStatus, LOG_LEVEL_ERROR);
                failFunc(xhr.responseText, textStatus);
            });
    };
    var postReq = function (url, data, successFunc, failFunc) {
        printLogMessage("WRDAppService", "postReq", "send data to url: " + url, LOG_LEVEL_INFO);
        // data["seconds"] = this.PreventCache()
        var token = getToken()

        if(token !== undefined) {
            $http.defaults.headers.common['Authorization'] = token
            printLogMessage("WRDAppService", "postReq", "request with token", LOG_LEVEL_INFO)
        }

        $http({
            method: "POST",
            dataType: 'json',
            url: url,
            cache: false,
            contentType: 'application/json',
            data: data,
            crossDomain: true,
            // headers: {
            //     "Authorization": token
            // },
            xhrFields: {
                withCredentials: false
            },
            beforeSend: function (xhr) {
                if (typeof token != 'undefined') {
                    printLogMessage("WRDAppService", "postReq", "auth: " + token, LOG_LEVEL_DEBUG);
                    xhr.setRequestHeader("Authorization", token);
                }
                else {
                    printLogMessage("WRDAppService", "postReq", "no token sending", LOG_LEVEL_WARN);
                }
            }
        })
            .then(function (receivedData) {
                printLogMessage("WRDAppService", "postReq", "data received successfully", LOG_LEVEL_INFO);
                successFunc(receivedData);
            })
            .catch(function (xhr, textStatus, errorThrown) {
                printLogMessage("WRDAppService", "postReq", "something has problem: " + textStatus, LOG_LEVEL_ERROR);
                failFunc(xhr.responseText, textStatus);
            });
    };
    var getReq = function (url, data, successFunc, failFunc) {
        printLogMessage("WRDAppService", "getReq", "send data to url: " + url, LOG_LEVEL_INFO);
        // data["seconds"] = this.PreventCache()
        var token = getToken()

        if(token !== undefined) {
            $http.defaults.headers.common['Authorization'] = token
            printLogMessage("WRDAppService", "getReq", "request with token", LOG_LEVEL_INFO)
        }

        $http({
            type: "GET",
            dataType: 'json',
            url: url,
            cache: false,
            contentType: 'application/json',
            params: data,
            async: false,
            crossDomain: true,
            data: '',
            headers: {
                "Content-Type": "application/json"
            },
            xhrFields: {
                withCredentials: false
            },
            beforeSend: function (xhr) {
                if (typeof token != 'undefined') {
                    printLogMessage("WRDAppService", "getReq", "auth: " + token, LOG_LEVEL_DEBUG);
                    xhr.setRequestHeader("Authorization", token);
                }
                else {
                    printLogMessage("WRDAppService", "getReq", "no token sending", LOG_LEVEL_WARN);
                }
            }
        })
            .then(function (receivedData) {
                printLogMessage("WRDAppService", "getReq", "data received successfully", LOG_LEVEL_INFO);
                successFunc(receivedData);
            })
            .catch(function (xhr, textStatus, errorThrown) {
                printLogMessage("WRDAppService", "getReq", "something has problem: " + textStatus, LOG_LEVEL_ERROR);
                failFunc(xhr.responseText, textStatus);
            });
    };
    return {
        'verb': verb,
        'info': info,
        'debug': debug,
        'warn': warn,
        'error': error,
        'printLogMessage': printLogMessage,
        'deleteReq': deleteReq,
        'patchReq': patchReq,
        'postReq': postReq,
        'getReq': getReq,
        'setToken': setToken,
        'getToken': getToken,
        'removeToken': removeToken,
        'showToast': showToast,
    };
});