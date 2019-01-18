app.directive('remote', function ($window, $timeout, WRDAppService) {
    return {
        restrict: 'A',
        scope: {
            'connect': '=',
            'stream': '=',
            'ready': '='
        },
        link: function (scope, element, attrs) {

            scope.$on('$destroy', function () {
                WRDAppService.info("AppDirective-remote", "$destroy", "element destroyed")
            });

            scope.connect = function (clientInfo) {
                WRDAppService.debug("AppDirective-remote", "connect", "client info: " + JSON.stringify(clientInfo))
            }

            function init() {
                scope.ready()
            }
            init()
        }
    }
})