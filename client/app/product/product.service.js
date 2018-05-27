"use strict";
(function () {
    angular
        .module('app.product')
        .factory('ProductService', ['$http', 'appSettings', ProductService]);

    function ProductService($http, appSettings) {

        var productApiUrl = appSettings.apiUrl + 'product/';

        var getProducts = function (){
            return $http.get(productApiUrl + "GetAll")
                .then(function (response) {
                    return response.data;
                }, function (error) {
                });
        };

        var addOrUpdateProduct = function (product){
            return $http.post(productApiUrl + "InsertOrUpdate", product)
                .then(function (response) {
                    return response.data;
                }, function (error) {
                });
        };

        var deleteProduct = function (id){
            return $http.delete(productApiUrl + "Delete/" + id)
                .then(function (response) {
                    return response.data;
                }, function (error) {
                });
        };

        return {
            getProducts: getProducts,
            addOrUpdateProduct: addOrUpdateProduct,
            deleteProduct: deleteProduct
        };
    }
})();
