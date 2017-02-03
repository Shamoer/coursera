/**
 * Created by kristofmoerman on 3/02/17.
 */
(function () {
    'use strict';


    angular.module('myFirstApp', [])

        .controller('MyFirstController', function ($scope) {

            $scope.name = "Moermanski";
            $scope.sayHello = function () {
                return "Yupze, Moermanski";
            }
        });

})();