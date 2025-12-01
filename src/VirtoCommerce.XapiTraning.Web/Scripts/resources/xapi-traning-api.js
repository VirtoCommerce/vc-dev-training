angular.module('VirtoCommerce.XapiTraning')
    .factory('VirtoCommerce.XapiTraning.webApi', ['$resource', function ($resource) {
        return $resource('api/xapi-traning');
    }]);
