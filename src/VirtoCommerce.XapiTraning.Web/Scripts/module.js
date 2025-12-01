// Call this to register your module to main application
var moduleName = 'VirtoCommerce.XapiTraning';

if (AppDependencies !== undefined) {
    AppDependencies.push(moduleName);
}

angular.module(moduleName, [])
    .config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('workspace.XapiTraningState', {
                    url: '/xapi-traning',
                    templateUrl: '$(Platform)/Scripts/common/templates/home.tpl.html',
                    controller: [
                        'platformWebApp.bladeNavigationService',
                        function (bladeNavigationService) {
                            var newBlade = {
                                id: 'blade1',
                                controller: 'VirtoCommerce.XapiTraning.helloWorldController',
                                template: 'Modules/$(VirtoCommerce.XapiTraning)/Scripts/blades/hello-world.html',
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
                path: 'browse/xapi-traning',
                icon: 'fa fa-cube',
                title: 'XapiTraning',
                priority: 100,
                action: function () { $state.go('workspace.XapiTraningState'); },
                permission: 'xapi-traning:access',
            };
            mainMenuService.addMenuItem(menuItem);
        }
    ]);
