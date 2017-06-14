var app = angular.module("NashvillePublicArtCapstone", ["ngRoute"]);

app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider.when("/",
        {
            templateUrl: "app/partials/login.html",
            controller: "LoginController"
        })
        .when("/login",
        {
            templateUrl: "app/partials/login.html",
            controller: "LoginController"
        })
        .when("/home",
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

app.run(["$http", function ($http) {

    var token = sessionStorage.getItem('token');

    if (token)
        $http.defaults.headers.common['Authorization'] = `bearer ${token}`;
}]);