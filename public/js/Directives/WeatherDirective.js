angular.module('weatherDirective', [])
        .directive('cityWeather', ['weatherService', function(weatherService) {
                return {
                    scope: {
                        internCoords: '=interncoords',
                        internLoading: '=loading'
                    },
                    templateUrl: 'templates/Weather.html',
                    link: function(scope, element, attrs) {
                        scope.$watchCollection('internCoords', function() {
                            // set loading key
                            scope.internLoading.push('weatherKey');
                            weatherService.q(scope.internCoords).then(function(w) {
                                // remove loading key
                                scope.internLoading.indexOf('weatherKey') > -1 ? scope.internLoading.splice(scope.internLoading.indexOf('geoKey')):null;
                                scope.weather = w;
                                //console.log(w);
                            }, function() {
                                scope.weather = null
                            });
                        });
                    }
                };

            }]);