(function () {
    angular.module("NashvillePublicArtCapstone")
        .controller("SignUpController", SignUpController);

    SignUpController.$inject = ["$scope"];

    function SignUpController($scope) {
        $scope.testSignUp = "Testing sign up page";
    }
})();