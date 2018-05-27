(function () {
    'use strict';

    angular.module('app.product')
        .controller('ProductCtrl', ['$http', '$q', '$scope', '$rootScope', '$stateParams', 'ProductService', ProductCtrl]);

    function ProductCtrl($http, $q, $scope, $rootScope, $stateParams, ProductService) {
        $scope.products = [];
        $scope.productData = {
            name: '',
            category: ''
        };
        $scope.selectedProduct = {};

        $scope.reset = function (){
            $scope.productData = {
                name: '',
                category: ''
            };
            $scope.selectedProduct = {};
        }
        
        $scope.getTemplate = function(product){
            if (product.id === $scope.selectedProduct.id){
                return '/app/product/edit.html';
            }
            else return '/app/product/display.html';
        };

        $scope.addOrUpdateProduct = function (product){
            ProductService
                .addOrUpdateProduct(product)
                    .then(function(response){
                        $scope.reset();
                        getProducts();
                    });
        }        

        $scope.editProduct = function (product){
            $scope.selectedProduct = angular.copy(product);
        }

        $scope.deleteProduct = function (id){
            ProductService
                .deleteProduct(id)
                    .then(function(response){
                        getProducts();
                    });
        }        

        function getProducts (){
            ProductService
                .getProducts()
                    .then(function(response){
                        $scope.products = response;
                    });
        };


        getProducts();
    }
})();
