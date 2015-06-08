app.directive('geoLocation', function($window) {
    return {
        restrict: "E",
        template: '<div>latitude:<span id="latitude"></span><br>longitude: <span data-ng-bind="coords.lng" id="longitude"></span></div><div style="width:250px; height: 200px;" id="map-canvas"></div>',
        scope: {
            internCoords: '=interncoords'
        },
        link: function(scope, element, attrs) {
            if ($window.navigator && $window.navigator.geolocation) {
                $window.navigator.geolocation.getCurrentPosition(function(position) {
                    var lat = position.coords.latitude;
                    var lng = position.coords.longitude;
                    scope.internCoords.lng = lng;
                    scope.internCoords.lat = lat;
                    scope.$apply();
                    
                    function setCoords(lat,lng) {
                        element.find('#latitude').text(lat);
                        element.find('#longitude').text(lng);
                    }
                    setCoords(lat,lng);
                    var myLatlng = new google.maps.LatLng(lat,lng );

                    var mapOptions = {
                        center: myLatlng,
                        zoom: 14
                    };
                    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
                    var marker = new google.maps.Marker({
                        position: myLatlng,
                        map: map,
                        title: 'There you are!'
                    });
                    google.maps.event.addListener(map, "mousedown", function(event) {
                        lat = event.latLng.lat();
                        lng = event.latLng.lng();
                        scope.internCoords.lng = lng;
                        scope.internCoords.lat = lat;
                        scope.$apply();
                        // populate yor box/field with lat, lng
                        var newLatLng = new google.maps.LatLng(lat, lng)
                        marker.setPosition(newLatLng);
                        map.setCenter(newLatLng);
                        setCoords(lat,lng);
                    });



                }, function(error) {
                    element.text("Your geolocation is not available");
                });
            }

        }
    }
});