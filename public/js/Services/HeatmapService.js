angular.module('heatmapService', [])
    .value('apiEndpointHeatmap', 'heatmap/')
    .service('heatmapService', ['$http', '$q', 'apiEndpointHeatmap', function($http, $q, apiEndpointHeatmap) {

        function responser(data) {
            this.data = data;
            this.getCoords = function() {
                return this.data.data.Coordlist ? this.data.data.Coordlist : [];
            }
        }

        this.load = function() {
            console.log('load heatmap');
            var deferred = $q.defer();
            var req = {
                method: 'GET',
                url: apiEndpointHeatmap + 'load'
            }
            $http(req).
            then(function(response) {
                deferred.resolve(new responser(response));
            }, function (error) {
                deferred.reject(error);

            })
            return deferred.promise;
        }
    }])