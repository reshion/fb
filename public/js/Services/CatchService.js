angular.module('catchService', [])
    .value('apiEndpointCatch', 'catch/')
    .service('catchService', ['$http', '$q', 'apiEndpointCatch', function($http, $q, apiEndpointCatch) {

        function getSaveResult(data) {
            this.data = data;
            this.get = function() {
                return this.data ? this.data : [];
            }
        }

        this.save = function(newCatch) {
            console.log('save catch');
            var deferred = $q.defer();
            var req = {
                method: 'POST',
                url: apiEndpointCatch + 'create',
                data: angular.toJson(newCatch)
            }
            $http(req).
            then(function(response) {
                deferred.resolve(new getSaveResult(response));
            }, function (error) {
                deferred.reject(error);

            })
            return deferred.promise;
        }
    }])