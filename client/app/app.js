(function () {
    'use strict';

    angular.module('app', [
        'ui.router',
        'app.product'
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$urlServiceProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $urlServiceProvider, $locationProvider) {
            $locationProvider.hashPrefix('');
            $urlServiceProvider.rules.otherwise('/product');
    }])
    .controller('AppCtrl', ['$scope', AppCtrl]);
    
    function AppCtrl($scope) {
        
    }

})();