app.directive('remote', function ($window, $timeout, WRDAppService) {
    return {
        restrict: 'A',
        scope: {
            'connect': '=',
            'stream': '=',
            'ready': '='
        },
        link: function (scope, element, attrs) {

            var ws = undefined;

            scope.$on('$destroy', function () {
                WRDAppService.info("AppDirective-remote", "$destroy", "element destroyed")
            });

            scope.connect = function (clientInfo) {
                WRDAppService.debug("AppDirective-remote", "connect", "client info: " + JSON.stringify(clientInfo))
            }

            scope.onOpen = function () {
                WRDAppService.info("AppDirective-remote", "onOpen", "server connected")
                scope.ready()
            }

            scope.onMessage = function (message) {
                WRDAppService.debug("AppDirective-remote", "onMessage", "message received: " + JSON.stringify(message))
            }

            scope.onClose = function () {
                WRDAppService.warn("AppDirective-remote", "onClose", "connection lost")
            }

            function init() {
                if(checkWebsocketSupport()) {
                    WRDAppService.info("AppDirective-remote", "init", "this browser support websocket")
                    connectToRemoteControlServer()
                }
                else{
                    WRDAppService.warn("AppDirective-remote", "init", "failed to init remote-directive")
                }
            }

            function connectToRemoteControlServer() {
                WRDAppService.info("AppDirective-remote", "connectToRemoteControlServer", "try to connect server using websocket")
                ws = new WebSocket(WEB_SOCKET_LOCAL)

                ws.onopen = function() {
                    scope.onOpen()
                }
                ws.onmessage = function(message) {
                    scope.onMessage(message)
                }
                ws.onclose = function() {
                    scope.onClose()
                }
                WRDAppService.info("AppDirective-remote", "connectToRemoteControlServer", "end of websocket setup")
            }

            function checkWebsocketSupport() {
                return "WebSocket" in window
            }
            init()
        }
    }
})