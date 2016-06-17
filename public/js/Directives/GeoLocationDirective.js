app.directive('geoLocation', function($window, $rootScope, locationService, $aside,publicPath) {
    return {
        restrict: "E",
        templateUrl:  publicPath + '/templates/GeoLocation.html',
        scope: {
            internCoords: '=interncoords',
            internLoading: '=loading',
            height: '=height',
            autoload: '=autoload',
        },
        link: function(scope, element, attrs) {
            scope.canvasID = "map-canvas-" + attrs.id;
            scope.canvasHeight = scope.height;
            scope.publicPath = publicPath;
            scope.id = attrs.id

            console.log(scope.canvasID);
            geoScope = scope;
            scope.refreshPosition = function() {
                scope.getLocation();
            }

            //scope.getPath = function() {
            //    return 'http://localhost/fishbook/public/templates/GeoLocationInfo.html';
            //}
            scope.showInfo = function() {
                var Info = $aside({
                    scope: scope,
                    template: publicPath + '/templates/GeoLocationInfo.html',
                    container: '#info-' + scope.id + '-panel',
                    html: true,
                    //contentTemplate: publicPath + '/templates/GeoLocationInfo.html',

                });
                console.log(Info);
                // Show when some event occurs (use $promise property to ensure the template has been loaded)
                Info.$promise.then(function() {
                    Info.show();
                })
            }

            scope.getLocation = function() {

                // set loading true by key
                scope.internLoading.push('geoKey');
                p = locationService.getLocation();
                p.then(function(data) {
                    
                    scope.setLocation(data)
                    scope.internLoading.indexOf('geoKey') > -1 ? scope.internLoading.splice(scope.internLoading.indexOf('geoKey')) : null;
                }).catch(function(data) {
                    scope.setLocation(data)
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
                scope.createMap();
                
            }

            scope.setLocation = function(data) {
                // remove loading key

                    var position = data
                    scope.internCoords.lng = position.coords.longitude;
                    scope.internCoords.lat = position.coords.latitude;


                scope.createMap();
                
            }
            

            scope.createMap = function() {
            console.log(scope.canvasID);

                scope.newLatLng = new google.maps.LatLng(scope.internCoords.lat, scope.internCoords.lng)

                document.getElementById(scope.canvasID).style.height = "200px";

                map = new google.maps.Map(document.getElementById(scope.canvasID), mapOptions);

                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    title: 'There you are!'
                });

                // Watch for Controller Changes
                scope.$watchCollection('internCoords.lng', function(newValue, oldValue) {
                    if (newValue) {
                        scope.newLatLng = new google.maps.LatLng(scope.internCoords.lat, newValue)
                        marker.setPosition(scope.newLatLng);
                        map.setCenter(scope.newLatLng);
                        scope.setCoords(scope.internCoords.lat, newValue);
                    }
                }, true)

                scope.$watchCollection('internCoords.lat', function(newValue, oldValue) {
                    if (newValue) {
                        scope.newLatLng = new google.maps.LatLng(newValue, scope.internCoords.lng)
                        marker.setPosition(scope.newLatLng);
                        map.setCenter(scope.newLatLng);
                        scope.setCoords(newValue, scope.internCoords.lng);
                    }
                }, true)


                // set Position on click
                google.maps.event.addListener(map, "dblclick", function(event) {
                    // set Controller Scope 
                    // Controller scope changes affects to directive scope by watchCollection
                    setTimeout(function() {
                        scope.internCoords.lng = event.latLng.lng();
                        scope.internCoords.lat = event.latLng.lat();
                        scope.setCoords();
                        scope.$apply();
                    }, 1000);
                });


                scope.setCoords();
            }
             scope.setCoords = function() {
                    element.find('#latitude').text(scope.internCoords.lat);
                    element.find('#longitude').text(scope.internCoords.lng);
                }
            scope.getLocation();

            //scope.info = {title: 'Position', content: 'Mit einem Doppel-Klick in die Karte kann man eine Position festlegen.'}
            //scope.info = {title: 'Position', content: 'Mit einem Doppel-Klick in die Karte kann man eine Position festlegen.'}
            var InfoPanel = $aside({scope: scope, show: false});
            scope.showAside = function() {
                InfoPanel.$promise.then(function() {
                    InfoPanel.show();
                })
            }
        }
    }
});

