angular.module('VirtoCommerce.XapiExample')
    .controller('VirtoCommerce.XapiExample.helloWorldController', ['$scope', 'VirtoCommerce.XapiExample.webApi', function ($scope, api) {
        var blade = $scope.blade;
        blade.title = 'XapiExample';

        blade.refresh = function () {
            api.get(function (data) {
                blade.title = 'XapiExample.blades.hello-world.title';
                blade.data = data.result;
                blade.isLoading = false;
            });
        };

        blade.refresh();
    }]);
