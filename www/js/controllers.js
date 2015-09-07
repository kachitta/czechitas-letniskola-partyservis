angular.module('starter.controllers', [])

    .controller('KalendarCtrl', function($scope, Objednavky) {
        $scope.eventSources = [
            {
                events: [],
                color: '#387ef5',
                textColor: 'white'
            }
        ];

        Objednavky.all().forEach(function(obj) {
            $scope.eventSources[0].events.push({
                title: "obj. č. " + obj.id,
                start: obj.denCal
            });

        });

        $scope.uiConfig = {
            calendar: {
                height: "auto",
                editable: false,
                header: {
                    left: '',
                    center: 'title',
                    right: 'prev,next'
                },
                lang: "cs"
            }
        };
    })

    .controller('ObjednavkaCtrl', function($scope, $stateParams, Objednavky) {
        $scope.obj = Objednavky.get($stateParams.id);

        $scope.nakup = {};

        $scope.obj.jidla.forEach(function(jidlo) {
            jidlo.jidlo.ingredience.forEach(function(ingr) {
                $scope.nakup[ingr.co] = $scope.nakup[ingr.co] || {
                    kolik: 0, jednotka: ingr.jednotka
                };
                $scope.nakup[ingr.co].kolik += (ingr.kolik * jidlo.kolik);
            });
        });

    })

    .controller('ObjednavkyCtrl', function($scope, Objednavky) {
        $scope.doRefresh = function() {
            Objednavky.add();
            $scope.$broadcast('scroll.refreshComplete');

        };

        $scope.objs = Objednavky.all();

        $scope.getPocetPolozek = function(obj) {
            var i = 0;
            obj.jidla.forEach(function(jidlo) {
                i += jidlo.kolik;
            });
            return i;
        };
    });
