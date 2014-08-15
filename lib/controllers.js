'use strict';

/*Controllers*/

var appControllers = angular.module('appControllers', []);

appControllers.controller('PhoneListController', ['$scope', 'appServices', function($scope, appServices){
  appServices.getPhones().then(function(results){
    $scope.phones = results.data.phones;
  });
}]);

appControllers.controller('PhoneShowController', ['$scope', '$routeParams', 'appServices', function($scope, $routeParams, appServices){
  appServices.getPhone($routeParams.id).then(function(result){
    $scope.phone = result.data.phone;
  });
}]);

appControllers.controller('PhoneEditController', ['$scope', function($scope){

}]);
