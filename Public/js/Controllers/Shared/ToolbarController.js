app.controller("ToolbarController", function ($scope, $http, $mdToast, $mdSidenav, $window, WRDAppService) {
    $scope.title = "Web Remote Desktop";

    WRDAppService.info("ToolbarController", "ToolbarController", "init");
})