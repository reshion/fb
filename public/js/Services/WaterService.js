angular.module('waterService', [])
        .value('apiEndpointPegel', 'http://www.pegelonline.wsv.de/webservices/rest-api/v2/')
        .service('waterService', ['$http', '$q', 'apiEndpointPegel', function($http, $q, apiEndpointPegel) {

                function waterInfo(data) {
                    this.data = data;
                    this.getWaters = function() {
                        return this.data ? this.data : [];
                    }
                }
                function messurementInfo(data) {
                    this.data = data;
                    this.getMessurementInfo = function() {
                        return this.data ? this.data : {};
                    }
                }
                
                
                this.queryMessurement = function(pegel) {
                    var deferred = $q.defer();
//                var uri = apiEndpoint + 'stations.json?latitude=' + coords.lat + "&longitude=" + coords.lng + "&radius=" + radius;
                    var uri = apiEndpointPegel + 'stations/' + pegel + "/W/measurements.png?start=P250D&width=900&height=400";

                    $http.get(uri).
                            success(function(response, status) {
                                deferred.resolve(new messurementInfo(response));
                            }).error(function(error, status) {
                                
                        deferred.reject(error);
                    });
                    return deferred.promise;
                }
                
                this.queryPegel = function(coords, radius) {
                    var deferred = $q.defer();
//                var uri = apiEndpoint + 'stations.json?latitude=' + coords.lat + "&longitude=" + coords.lng + "&radius=" + radius;
                    var uri = apiEndpointPegel + 'stations.json?latitude=' + coords.lat + "&longitude=" + coords.lng + "&radius=" + radius;
                    console.log(uri);
                    $http.get(uri).
                            success(function(response, status) {
                                deferred.resolve(new waterInfo(response));
                            }).error(function(error, status) {
                                
                        deferred.reject(error);
                    });
                    return deferred.promise;
                }
            }])