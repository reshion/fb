"use strict";
(function() {

    app.controller('MainController', function($scope,$log,weatherService) {
        window.scope = $scope;
        $scope.loading = [];
        $scope.radius = 20;
        $scope.coords = {lng: 0, lat:0 };
        $scope.coords2 = {lng: 0, lat:0 };
    });

})();


