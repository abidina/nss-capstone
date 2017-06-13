(function () {
    angular.module("NashvillePublicArtCapstone")
        .controller("DefaultController", DefaultController);

    DefaultController.$inject = ["$scope"];

    function DefaultController($scope) {
        $scope.testHome = "Testing home page";
        console.log($scope);
    }
})();