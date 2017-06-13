(function () {
    angular.module("NashvillePublicArtCapstone")
        .controller("ProfileController", ProfileController);

    ProfileController.$inject = ["$scope"];

    function ProfileController($scope) {
        $scope.testUserList = "Testing user's list page";
        console.log($scope);
    }
})();