angular.module('weatherService', [])
        .value('apiEndpoint', 'http://api.openweathermap.org/data/2.5/weather')
        .value('iconEndpoint', 'http://openweathermap.org/img/w/')
        .service('weatherService', ['$http', '$q', 'apiEndpoint', 'iconEndpoint', function($http, $q, apiEndpoint, iconEndpoint) {
                function WeatherInfo(openWeatherData) {
                    this.data = openWeatherData;

                    this.getTemperature = function() {
                        return this.data && this.data.main ? this.data.main.temp : null;
                    }

                    this.getMinTemperature = function() {
                        return this.data && this.data.main ? this.data.main.temp_min : null;
                    }

                    this.getMaxTemperature = function() {
                        return this.data && this.data.main ? this.data.main.temp_max : null;
                    }

                    this.getIconCode = function() {
                        return this.data && this.data.weather && this.data.weather[0] ? this.data.weather[0]['icon'] : null;
                    }

                    this.getIcon = function() {
                        return iconEndpoint + this.getIconCode() + '.png';
                    }
                    this.getCityName = function() {
                        return this.data && this.data.name ? this.data.name : null; 
                    }
                }
                ;

                this.q = function(coords, unit) {
                    var deferred = $q.defer();
                    unit = typeof unit !== 'undefined' ? unit : 'metric';
                    var uri = apiEndpoint + "?lat=" + coords.lat + "&lon=" + coords.lng + "&units=" + unit + "&callback=JSON_CALLBACK";
                    $http.jsonp(uri).
                            success(function(response, status) {
                                deferred.resolve(new WeatherInfo(response));
                            }).error(function(error, status) {
                        deferred.reject(error);
                    });

                    return deferred.promise;
                }
            }])