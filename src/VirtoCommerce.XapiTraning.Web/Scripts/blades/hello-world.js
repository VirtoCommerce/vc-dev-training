angular.module('VirtoCommerce.XapiTraning')
    .controller('VirtoCommerce.XapiTraning.helloWorldController', ['$scope', 'VirtoCommerce.XapiTraning.webApi', function ($scope, api) {
        var blade = $scope.blade;
        blade.title = 'XapiTraning';

        blade.refresh = function () {
            api.get(function (data) {
                blade.title = 'XapiTraning.blades.hello-world.title';
                blade.data = data.result;
                blade.isLoading = false;
            });
        };

        blade.refresh();
    }]);
