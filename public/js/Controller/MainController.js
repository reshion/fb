"use strict";
(function() {

    app.controller('MainController', function($scope,weatherService) {
        window.scope = $scope;
        $scope.loading = [];
        
        $scope.coords = {lng: 0, lat:0 };
//         $scope.weather = weatherService.q($scope.coords);

        
    });

})();


