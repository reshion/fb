"use strict";
var app = angular.module("App", ['weatherService', 'weatherDirective'])
        
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
        })







  

