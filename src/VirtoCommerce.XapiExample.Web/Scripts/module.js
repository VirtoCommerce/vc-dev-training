// Call this to register your module to main application
var moduleName = 'VirtoCommerce.XapiExample';

if (AppDependencies !== undefined) {
    AppDependencies.push(moduleName);
}

angular.module(moduleName, [])
    .config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('workspace.XapiExampleState', {
                    url: '/xapi-example',
                    templateUrl: '$(Platform)/Scripts/common/templates/home.tpl.html',
                    controller: [
                        'platformWebApp.bladeNavigationService',
                        function (bladeNavigationService) {
                            var newBlade = {
                                id: 'blade1',
                                controller: 'VirtoCommerce.XapiExample.helloWorldController',
                                template: 'Modules/$(VirtoCommerce.XapiExample)/Scripts/blades/hello-world.html',
                                isClosingDisabled: true,
                            };
                            bladeNavigationService.showBlade(newBlade);
                        }
                    ]
                });
        }
    ])
    .run(['platformWebApp.mainMenuService', '$state',
        function (mainMenuService, $state) {
            //Register module in main menu
            var menuItem = {
                path: 'browse/xapi-example',
                icon: 'fa fa-cube',
                title: 'XapiExample',
                priority: 100,
                action: function () { $state.go('workspace.XapiExampleState'); },
                permission: 'xapi-example:access',
            };
            mainMenuService.addMenuItem(menuItem);
        }
    ]);
