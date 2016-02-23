"use strict";
var app = angular.module("App", [
    'weatherService',
    'weatherDirective',
    'waterService',
    'waterDirective',
    'locationService',
    'catchDirective',
    'catchService',
    'heatmapDirective',
    'heatmapService',
    'ngSanitize',
    'mgcrea.ngStrap',
    'mgcrea.ngStrap.modal',
    'mgcrea.ngStrap.aside',
    'ngAnimate'
]).config(function($modalProvider) {
    angular.extend($modalProvider.defaults, {
        html: true
    });
})

        // HELPER //
        .directive('toggleForId', function($window, $rootScope) {
            return {
                scope: {
                    toggleForId: '@'
                },
                link: function(scope, element, attrs) {
                    element.click(function() {
                        scope.clicked = !scope.clicked;
                        scope.clicked ? $('#' + scope.toggleForId).hide() : $('#' + scope.toggleForId).show();

                    })
                }
            }
        });


