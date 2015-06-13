app.directive('geoLocation', function($window, $rootScope, locationService) {
    return {
        restrict: "E",
        templateUrl: 'templates/GeoLocation.html',
        scope: {
            internCoords: '=interncoords',
            internLoading: '=loading'
        },
        link: function(scope, element, attrs) {
            
            scope.refreshPosition = function() {
                getLocation();
            }
            
            getLocation = function() {
                // set loading true by key
                scope.internLoading.push('geoKey');
                p = locationService.getLocation();
                p.then(function(data) {
                    
                    setLocation(data)
                    scope.internLoading.indexOf('geoKey') > -1 ? scope.internLoading.splice(scope.internLoading.indexOf('geoKey')) : null;
                }).catch(function(data) {
                    setLocation(data)
                    scope.internLoading.indexOf('geoKey') > -1 ? scope.internLoading.splice(scope.internLoading.indexOf('geoKey')) : null;
                })
            }
            var myLatlng;
            var map;
            var mapOptions = {
                center: myLatlng,
                zoom: 14,
                disableDoubleClickZoom: true,
                disableDefaultUI: true
            };
            scope.toggleDefaultUI = function() {
                mapOptions.disableDefaultUI = !mapOptions.disableDefaultUI;
                createMap();
                
            }
           
            setLocation = function(data) {
                // remove loading key
                var position = data
                scope.internCoords.lng = position.coords.longitude;
                scope.internCoords.lat = position.coords.latitude;
                createMap();
                
            }
            
            createMap = function() {
                var newLatLng = new google.maps.LatLng(scope.internCoords.lat, scope.internCoords.lng)
//			scope.$apply();
                map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
                
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    title: 'There you are!'
                });

                // Watch for Controller Changes
                scope.$watchCollection('internCoords.lng', function(newValue, oldValue) {
                    if (newValue) {
                        newLatLng = new google.maps.LatLng(scope.internCoords.lat, newValue)
                        marker.setPosition(newLatLng);
                        map.setCenter(newLatLng);
                        setCoords(scope.internCoords.lat, newValue);
                    }
                }, true)

                scope.$watchCollection('internCoords.lat', function(newValue, oldValue) {
                    if (newValue) {
                        newLatLng = new google.maps.LatLng(newValue, scope.internCoords.lng)
                        marker.setPosition(newLatLng);
                        map.setCenter(newLatLng);
                        setCoords(newValue, scope.internCoords.lng);
                    }
                }, true)


                // set Position on click
                google.maps.event.addListener(map, "dblclick", function(event) {
                    // set Controller Scope 
                    // Controller scope changes affects to directive scope by watchCollection
                    setTimeout(function() {
                        scope.internCoords.lng = event.latLng.lng();
                        scope.internCoords.lat = event.latLng.lat();
                        setCoords();
                        scope.$apply();
                    }, 1000);
                });

                
                setCoords();
            }
            function setCoords() {
                    element.find('#latitude').text(scope.internCoords.lat);
                    element.find('#longitude').text(scope.internCoords.lng);
                }
            getLocation();

            scope.info = {title: 'Position', content: 'Mit einem Doppel-Klick in die Karte kann man eine Position festlegen.'}
        }
    }
});

