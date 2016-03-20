angular.module('catchDirective', [])
    .directive('catch',
        ['weatherService', 'waterService', 'locationService', 'catchService', 'weatherService', '$aside', "$modal", "$q","publicPath",
            function (weatherService, waterService, locationService, catchService, weatherService, $aside, $modal, $q, publicPath) {
                return {
                    scope: {
                        internCoords: '=interncoords',
                        internLoading: '=loading'
                    },
                    templateUrl: publicPath + '/templates/Catch.html',
                    link: function (scope, element, attrs) {
                        window.catchScope = scope;
                        scope.newCatch = function (coords, weather, callback) {
                            Catch = {
                                fish: {
                                    species: {name: 'Fishart', value: ''},
                                    length: {name: 'Länge', value: ''},
                                    extent: {name: 'Umfang', value: ''},
                                    weight: {name: 'Gewicht', value: ''},
                                },
                                coords: coords,
                                weather: weather,
                            }

                            callback(Catch);
                        }

                        scope.saveCatch = function (newCatch) {
                            catchService.save(newCatch)
                                .then(function (saveCatchInfo) {
                                    var myModal = $modal({
                                        'title': 'Titel',
                                        content: saveCatchInfo.get().data.data.message,
                                        show: false
                                    });
                                    scope.showModal(myModal)
                                    scope.prepareCatch();

                                }).catch(function (weather) {
                                    reject(weather);
                            });
                        }

                        scope.showModal = function (myModal) {
                            myModal.$promise.then(myModal.show);
                        };
                        scope.hideModal = function (myModal) {
                            myModal.$promise.then(myModal.hide);
                        };

                        var InfoPanel = $aside({scope: scope, show: false});
                        scope.showAside = function () {
                            InfoPanel.$promise.then(function () {
                                InfoPanel.show();
                            })
                        }

                        scope.getWeather = function (coords) {

                            return $q(function (resolve, reject) {

                                weatherService.q(coords)
                                    .then(function (weather) {

                                        // remove loading key
                                        scope.internLoading.indexOf('weatherKey') > -1 ? scope.internLoading.splice(scope.internLoading.indexOf('weatherKey')) : null;
                                        resolve(weather);

                                    }).catch(function (weather) {
                                    reject(weather);
                                });
                            })
                        }
                        scope.getLocation = function () {

                            return $q(function (resolve, reject) {
                                // set loading true by key
                                scope.internLoading.push('geoKey');
                                p = locationService.getLocation();
                                p.then(function (response) {
                                    var position = {
                                        lng: response.coords.longitude,
                                        lat: response.coords.latitude,
                                    }
                                    scope.internLoading.indexOf('geoKey') > -1 ? scope.internLoading.splice(scope.internLoading.indexOf('geoKey')) : null;
                                    resolve(position);
                                }).catch(function (response) {
                                    var position = {
                                        lng: response.coords.longitude,
                                        lat: response.coords.latitude,
                                    }
                                    scope.internLoading.indexOf('geoKey') > -1 ? scope.internLoading.splice(scope.internLoading.indexOf('geoKey')) : null;
                                    reject(position);
                                })
                            })
                        }
                        scope.prepareCatch = function () {
                            var cRef = scope.getLocation();
                            var wRef = cRef.then(
                                function (coords) {
                                    scope.setCoords(coords)
                                    return scope.getWeather(coords);

                                }).catch(function (err) {
                                console.log(err)
                            });
                            wRef.then(function (weather) {
                                scope.newCatch(scope.getCoords(), weather, function (data) {
                                    scope.catch = data;
                                });
                            }).catch(function (err) {
                                console.log(err)
                            });


                        }
                        scope.setCoords = function (coords) {
                            scope.internCoords.lat = coords.lat;
                            scope.internCoords.lng = coords.lng;
                        }
                        scope.getCoords = function () {
                            return scope.internCoords;
                        }

                        scope.ini = function () {
                            scope.prepareCatch();
                            scope.coords = scope.internCoords;
                            scope.loading = scope.internLoading;
                            scope.info = {
                                "title": "Wetter",
                                "content": "Meteorologische Informationen in Abhängigkeit der Position."
                            };
                            //console.log(scope.getWaterInfo(new scope.newCatch()))


                        }
                        scope.ini();

                    }
                };

            }]);