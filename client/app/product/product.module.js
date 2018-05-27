(function () {
    'use strict';

    angular.module('app.product', [])
        .config(["$stateProvider", function ($stateProvider) {
            $stateProvider
                .state('product', {
                    url: '/product',
                    templateUrl: '/app/product/product.html',                    
                    controller: 'ProductCtrl'
                });
        }]);
})();