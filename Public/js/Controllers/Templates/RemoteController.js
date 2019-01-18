app.controller("RemoteController", function ($scope, $http, $mdToast, $mdSidenav, $window, WRDAppService) {

    $scope.clientList = [
        {
            "name": "Localhost",

        },
        {
            "name": "Test kiosk"
        }
    ]

    $scope.client = {}
    $scope.shareObject = {}

    WRDAppService.info("RemoteController", "RemoteController", "init");

    $scope.remoteDirectiveInit = function () {
        WRDAppService.info("RemoteController", "remoteDirectiveInit", "remote directive is ready")
    }

    $scope.onBtnConnectClicked = function () {
        $scope.connect($scope.client)
    }
})