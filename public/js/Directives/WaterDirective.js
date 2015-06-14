angular.module('waterDirective', [])
        .directive('waterInfo', ['waterService', function(waterService) {
                return {
                    scope: {
                        internCoords: '=interncoords',
                        internLoading: '=loading',
                        internRadius: '=internradius'

                    },
                    templateUrl: 'templates/Water.html',
                    link: function(scope, element, attrs) {

                        scope.getWaterInfo = function() {

                            scope.$watchCollection('internCoords', function() {
                                if (scope.internCoords.lat != 0 && scope.internCoords.lng != 0 && scope.internRadius != 0) {
                                    // set loading key
                                    scope.internLoading.push('waterKey');
                                    // remove loading key
                                    waterService.queryPegel(scope.internCoords, scope.internRadius).then(function(waterInfo) {
                                        scope.internLoading.indexOf('waterKey') > -1 ? scope.internLoading.splice(scope.internLoading.indexOf('waterKey')) : null;
                                        scope.waterInfo = waterInfo.getWaters();
                                    })
                                }
                            });
                        }
                        scope.getWaterInfo();

                        scope.getMessurement = function(pegel) {
                            waterService.queryMessurement(pegel).then(function(messurment) {
                                scope.messurementInfoImage = messurment.getMessurementInfo();
                                //TODO
//                               
                            });
                            scope.pegel = {
                                title: pegel,
                                content: "<img  class='messurement' src='http://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/" + pegel + "/W/measurements.png?start=P250D&width=900&height=400'>"
                            }

                        }
                        scope.info = {
                            title: 'Gewässerdaten',
                            content: "n/a"
                        }
                    }
                }

            }])
