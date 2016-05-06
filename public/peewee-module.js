/**
 * Created by haileykeen on 2/7/16.
 */
'use strict';

var peeweeModule = angular.module('pwApp', [
        'ngMaterial'
    ])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo', {
              'default': '900'
            })
            .accentPalette('indigo', {
              'default': '900'
            });
    });

