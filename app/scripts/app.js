'use strict';

angular.module('evalCalcApp', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
