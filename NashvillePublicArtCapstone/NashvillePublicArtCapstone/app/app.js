var app = angular.module("NashvillePublicArtCapstone", ["ngRoute"]);

app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider.when("/",
        {
            templateUrl: "app/partials/grid-view.html",
            controller: "DefaultController"
        })
        .when("/profile",
        {
            templateUrl: "/app/partials/user-lists.html",
            controller: "ProfileController"
        });

    $locationProvider.html5Mode(true);
}]);