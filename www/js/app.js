// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ui.calendar'])

    .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        $ionicConfigProvider.views.maxCache(0);

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            // Each tab has its own nav history stack:

            .state('tab.objednavky', {
                url: '/objednavky',
                views: {
                    'tab-objednavky': {
                        templateUrl: 'templates/tab-objednavky.html',
                        controller: 'ObjednavkyCtrl'
                    }
                }
            })

            .state('objednavka', {
                url: '/objednavka/:id',
                abstract: true,
                templateUrl: 'templates/objednavka-tabs.html'
            })

            .state('objednavka.info', {
                url: '/info',
                views: {
                    'objednavka-tab-info': {
                        templateUrl: 'templates/objednavka-info.html',
                        controller: 'ObjednavkaCtrl'
                    }
                }
            })

            .state('objednavka.jidla', {
                url: '/jidla',
                views: {
                    'objednavka-tab-jidla': {
                        templateUrl: 'templates/objednavka-jidla.html',
                        controller: 'ObjednavkaCtrl'
                    }
                }
            })

            .state('objednavka.nakup', {
                url: '/nakup',
                views: {
                    'objednavka-tab-nakup': {
                        templateUrl: 'templates/objednavka-nakup.html',
                        controller: 'ObjednavkaCtrl'
                    }
                }
            })

            .state('tab.kalendar', {
                url: '/kalendar',
                views: {
                    'tab-kalendar': {
                        templateUrl: 'templates/tab-kalendar.html',
                        controller: 'KalendarCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/objednavky');

    });
