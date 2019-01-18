app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "/Template/index",
            controller : "RemoteController",
            cache: false,
            disableCache: true,
        })
        .otherwise({
            redirectTo: '/',
            cache: false,
            disableCache: true,
        });
});