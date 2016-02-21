angular.module('catchDirective', [])
    .directive('catch',
        ['weatherService', 'waterService','locationService', 'catchService', 'weatherService', '$aside', "$modal",
        function(weatherService, waterService, locationService,catchService, weatherService, $aside, $modal) {
        return {
            scope: {
                internCoords: '=interncoords',
                internLoading: '=loading'
            },
            templateUrl: 'templates/Catch.html',
            link: function(scope, element, attrs) {
                window.catchScope = scope;
                scope.newCatch = function(callback){
                    Catch = {
                        fish: {
                            species: {name: 'Fishart', value: ''},
                            length: {name: 'Länge', value: ''},
                            extent: {name: 'Umfang', value: ''},
                            weight: {name: 'Gewicht', value: ''},
                        }
                    }
                    weatherService.q(scope.internCoords).then(function(w) {
                        // remove loading key
                        scope.internLoading.indexOf('weatherKey') > -1 ? scope.internLoading.splice(scope.internLoading.indexOf('weatherKey')) : null;
                        Catch.weather = w;
                        callback(Catch);
                    }, function() {
                        Catch.weather = null;
                        callback(Catch);
                    });
                }


                scope.saveCatch = function(newCatch) {

                    catchService.save(newCatch).then(function(saveCatchInfo){
                        var myModal = $modal({'title' : 'Titel', content:saveCatchInfo.get().data.data.message, show: false});
                        scope.showModal(myModal)
                        scope.newCatch(function(data){
                            scope.catch = data;
                        });
                    });
                }

                scope.showModal = function(myModal) {
                    myModal.$promise.then(myModal.show);
                };
                scope.hideModal = function(myModal) {
                    myModal.$promise.then(myModal.hide);
                };

                var InfoPanel = $aside({scope: scope, show: false});
                scope.showAside = function() {
                    InfoPanel.$promise.then(function() {
                        InfoPanel.show();
                    })
                }

                scope.ini = function() {
                    scope.coords = scope.internCoords;
                    scope.loading = scope.internLoading;
                    scope.info = {
                        "title": "Wetter",
                        "content": "Meteorologische Informationen in Abhängigkeit der Position."
                    };
                    //console.log(scope.getWaterInfo(new scope.newCatch()))
                    scope.newCatch(function(data){
                        scope.catch = data;
                    });


                }
                scope.ini();

            }
        };

    }]);