'use strict';

/*Services*/

var appServices = angular.module('appServices', []);

phoneCatApp.factory('appServices', ['$http', '$q', function($http, $q){
  
  var url = 'http://localhost:3000/api/v1/';
  var callback = '?callback=JSON_CALLBACK';

  //get all phones
  this.getPhones = function(){
    var defered = $q.defer();
    var listApi = url + 'phones' + callback;

    $http.jsonp(listApi).then(function(results){
      defered.resolve(results);
    }, function(error){
      defered.reject(error);
    });
  
    return defered.promise;
  }

  this.getPhone = function(id){
    var defered = $q.defer();
    var itemApi = url + "phones/" + id + callback;
    
    $http.jsonp(itemApi).then(function(result){
      defered.resolve(result);
    }, function(error){
      defered.reject(error);
    });
  
    return defered.promise;
  }

  /*
  this.searchPhones= function(query){
    var defered = $q.defer();
    var searchApi = url + "search?query=" + query;

    $http.jsonp(listApi).then(function(results){
      defered.resolve(results);
    }, function(error){
      defered.reject(error);
    });
  
    return defered.promise;
  }
  */

  return this;
}]);

