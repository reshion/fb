angular.module('weatherDirective', [])
        .directive('cityWeather', ['weatherService', 'waterService', function(weatherService, waterService) {
                return {
                    scope: {
                        internCoords: '=interncoords',
                        internLoading: '=loading'
                    },
                    templateUrl: 'templates/Weather.html',
                    link: function(scope, element, attrs) {
                        getWeather = function() {
                            scope.$watchCollection('internCoords', function() {
                                // set loading key
                                scope.internLoading.push('weatherKey');
                                weatherService.q(scope.internCoords).then(function(w) {
                                    // remove loading key
                                    scope.internLoading.indexOf('weatherKey') > -1 ? scope.internLoading.splice(scope.internLoading.indexOf('weatherKey')) : null;
                                    scope.weather = w;
                                }, function() {
                                    scope.weather = null
                                });

                            });
                        }
                        getWeather();
                        scope.refreshWeather = function() {
                            scope.weather = null
                            getWeather();
                        }
                        scope.info = {
                            "title": "Wetter",
                            "content": "Meteorologische Informationen in Abhängigkeit der Position."
                        };
                    }
                };

            }]);