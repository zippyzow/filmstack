angular.module('templates', []);

var peeweeModule = angular.module('pwApp', ['ngMaterial', 'templates'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo', {
              'default': '900'
            })
            .accentPalette('indigo', {
              'default': '900'
            });
    });

