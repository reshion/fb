angular.module('locationService', [])
        .service('locationService', ['$q', '$window', function($q, $window) {
                

                this.getLocation = function() {

                    return $q(function(resolve, reject) {
                        if ($window.navigator && $window.navigator.geolocation) {
                            console.log('geo');
                            $window.navigator.geolocation.getCurrentPosition(function(position) {
                                resolve(position)
                            })
                        } else {

                            var position = {};
                            position.coords = {};
                            position.coords.latitude = 51;
                            position.coords.longitude = 13;
                            reject(position);
                        }
                    })
                }
            }])

