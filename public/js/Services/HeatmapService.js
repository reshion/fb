angular.module('heatmapService', [])

    .service('heatmapService', ['$http', '$q', 'publicPath', function($http, $q, publicPath) {

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
                url: publicPath + '/heatmap/load'
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