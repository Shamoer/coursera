(function () {
  'use strict';

  angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunch = "";
    $scope.class = "";
    $scope.message = "";
    $scope.nLunchItems  = 0;
    $scope.checkLunch = function () {
      if($scope.lunch == '') {
        $scope.message = "Please enter data first";
        $scope.class = 'red';
      } else {
        $scope.items = $scope.lunch.split(',');
        $scope.nLunchItems = $scope.items.length;
        if ($scope.nLunchItems < 4 && $scope.nLunchItems > 0) {
          $scope.class = "green";
          $scope.message = "Enjoy";
        } else if ($scope.nLunchItems > 3) {
          $scope.message = "Too much";
        }
      }
      return [$scope.message, $scope.class] ;
    }
  }

})();