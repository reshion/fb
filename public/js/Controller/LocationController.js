"use strict";
(function() {

    app.controller('LoacationController', function($scope,$log, publicPath, $modal) {
        window.LoacationControllerScope = $scope;
        $scope.radius = 20;
        $scope.noAutoload = true;

        $scope.coords2 = {lng: 0, lat:0 };
        $scope.publicPath = publicPath;
        $scope.loading = [];
        var LocationModal = $modal({
            scope: $scope,
            template: publicPath + '/templates/TagLocation.html',
            show: false,
            animation: 'am-flip-x',
            container: '.content'
        });
        // Show when some event occurs (use $promise property to ensure the template has been loaded)
        $scope.showModal = function(id,coords) {
            console.log(id)
            console.log(coords)
            $scope.id = id;
            $scope.autoload = false;
            $scope.coords = coords;
            LocationModal.$promise.then(
                LocationModal.show
            );
        };
    });

})();