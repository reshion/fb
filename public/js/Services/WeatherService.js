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
                    this.getHumidity = function() {
                        return this.data && this.data.main && this.data.main.humidity ? this.data.main.humidity : null; 
                    }
                    this.getPressure = function() {
                        return this.data && this.data.main && this.data.main.pressure ? this.data.main.pressure : null; 
                    }
                    this.getPressureSeaLevel = function() {
                        return this.data && this.data.main && this.data.main.sea_level ? this.data.main.sea_level : null; 
                    }
                    this.getPressureGroundLevel = function() {
                        return this.data && this.data.main && this.data.main.grnd_level ? this.data.main.grnd_level : null; 
                    }
                    this.getWindSpeed = function() {
                        return this.data && this.data.wind && this.data.wind.speed ? this.data.wind.speed : null; 
                    }
                    this.getWindDirection = function() {
                        return this.data && this.data.wind && this.data.wind.deg ? this.data.wind.deg : null; 
                    }
                    this.getWindGust = function() {
                        return this.data && this.data.wind && this.data.wind.gust ? this.data.wind.gust : null; 
                    }
                    this.getRain3h = function() {
                        return this.data && this.data.rain && this.data.rain['3h'] ? this.data.rain['3h'] : null; 
                    }
                    this.getSnow3h = function() {
                        return this.data && this.data.snow && this.data.snow['3h'] ? this.data.snow['3h'] : null; 
                    }
                    this.getSunrise = function() {
                        return this.data && this.data.sys && this.data.sys.sunrise ? this.data.sys.sunrise * 1000: null; 
                    }
                    this.getSunset = function() {
                        return this.data && this.data.sys && this.data.sys.sunset ? this.data.sys.sunset * 1000: null; 
                    }
                }
                ;

                this.q = function(coords, unit) {
                    var deferred = $q.defer();
                    unit = typeof unit !== 'undefined' ? unit : 'metric';
                    var uri = apiEndpoint + "?lat=" + coords.lat + "&lon=" + coords.lng + "&units=" + unit + "&callback=JSON_CALLBACK";
                    uri += "&APPID=fbfafd4b25539198a90fb0abf14b6048";
		             $http.jsonp(uri).
                            success(function(response, status) {
                                deferred.resolve(new WeatherInfo(response));
                            }).error(function(error, status) {
                        deferred.reject(error);
                    });

                    return deferred.promise;
                }
            }])
