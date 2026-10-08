angular.module('VirtoCommerce.XapiExample')
    .factory('VirtoCommerce.XapiExample.webApi', ['$resource', function ($resource) {
        return $resource('api/xapi-example');
    }]);
