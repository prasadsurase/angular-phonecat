'use strict';

/*Routes*/

phoneCatApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/phones', {
      templateUrl: 'views/phones/list.html',
      controller: 'PhoneListController' 
    }).
    when('/phones/:id', {
      templateUrl: 'views/phones/show.html',
      controller: 'PhoneShowController'
    }).
    when('/phones/:id/edit', {
      templateUrl: 'views/phones/edit.html',
      controller: 'PhoneEditController'
    }).
    otherwise({
      redirectTo: '/phones'
    });
}]);
