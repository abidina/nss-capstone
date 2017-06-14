(function () {
    angular.module("NashvillePublicArtCapstone")
        .controller("LoginController", LoginController);

    LoginController.$inject = ["$scope"];

    function LoginController($scope) {
        $scope.testLogin = "Testing login page";
    }
})();