angular.module('heatmapDirective', [])
    .directive('heatMap', ['heatmapService','publicPath', function (heatmapService,publicPath) {
        return {
            scope: {
                internHeight: "=heatmapHeight"

            },
            templateUrl: publicPath + '/templates/Heatmap.html',
            link: function(scope, element, attrs) {
                heatmapScope = scope;
                scope.id = attrs.id;
                scope.map;
                scope.heatmap;

                scope.prepareMap = function(coords) {
                    var lat, lng;
                    lat = coords.length > 0 ? coords[0].lat : 51;
                    lng = coords.length > 0 ? coords[0].lng : 13;
                    document.getElementById("heatmap-canvas-" + scope.id).style.height = scope.internHeight;
                    scope.map = new google.maps.Map(document.getElementById("heatmap-canvas-" + scope.id), {
                        zoom: 10,
                        center: {lat: lat, lng: lng},
                        mapTypeId: google.maps.MapTypeId.SATELLITE
                    });
                    scope.heatmap = new google.maps.visualization.HeatmapLayer({
                        data: getPoints(),
                        map: scope.map
                    });
                    function getPoints() {
                        var coordObject = [];
                        for(var i = 0 ; i < coords.length; i++) {
                            coordObject.push(new google.maps.LatLng(coords[i].lat, coords[i].lng))
                        }
                        return coordObject;
                    }
                }
                scope.loadCoords = function(){
                    heatmapService.load().then(function(coords){

                        scope.prepareMap(coords.getCoords());

                    })
                }
                scope.toggleHeatmap = function() {
                    scope.heatmap.setMap(scope.heatmap.getMap() ? null : scope.map);
                }

                scope.changeGradient = function() {
                    var gradient = [
                        'rgba(0, 255, 255, 0)',
                        'rgba(0, 255, 255, 1)',
                        'rgba(0, 191, 255, 1)',
                        'rgba(0, 127, 255, 1)',
                        'rgba(0, 63, 255, 1)',
                        'rgba(0, 0, 255, 1)',
                        'rgba(0, 0, 223, 1)',
                        'rgba(0, 0, 191, 1)',
                        'rgba(0, 0, 159, 1)',
                        'rgba(0, 0, 127, 1)',
                        'rgba(63, 0, 91, 1)',
                        'rgba(127, 0, 63, 1)',
                        'rgba(191, 0, 31, 1)',
                        'rgba(255, 0, 0, 1)'
                    ]
                    scope.heatmap.set('gradient', scope.heatmap.get('gradient') ? null : gradient);
                }

                 scope.changeRadius = function() {
                    scope.heatmap.set('radius', scope.heatmap.get('radius') ? null : 20);
                }

                scope.changeOpacity = function() {
                    scope.heatmap.set('opacity', scope.heatmap.get('opacity') ? null : 0.2);
                }

                function ini() {
                    console.log('ini heatmap directive')
                    scope.loadCoords();
                }
                ini();
            }
        }

    }])