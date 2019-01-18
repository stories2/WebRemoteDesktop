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
    $scope.connectBtnEnable = false

    WRDAppService.info("RemoteController", "RemoteController", "init");

    $scope.remoteDirectiveInit = function () {
        WRDAppService.info("RemoteController", "remoteDirectiveInit", "remote directive is ready")
        $scope.connectBtnEnable = true
    }

    $scope.onBtnConnectClicked = function () {
        if($scope.connectBtnEnable) {
            $scope.connect($scope.client)
        }
    }
})