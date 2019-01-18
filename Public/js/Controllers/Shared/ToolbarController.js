app.controller("ToolbarController", function ($scope, $http, $mdToast, $mdSidenav, $window, WRDAppService) {
    $scope.title = APP_NAME;

    WRDAppService.info("ToolbarController", "ToolbarController", "init");
})