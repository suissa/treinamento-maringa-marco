(function(){

  'use strict';

  angular.module('myApp.beers.Services', [])
  .service('BeerService', BeerService);


  function BeerService($http) {
    var urlBase = 'http://localhost:3000/api/beers'
      , access = {url: urlBase}
      ;

    this.list = function() {
      access.method = 'GET';
      return $http.get(urlBase);
    }

    this.get = function(id) {
      var url = urlBase + '/_id/' + id;
      return $http.get(url);
    }

    this.create = function(beer) {
      return $http.post(urlBase, beer);
    }

    this.edit = function(beer) {
      var url = urlBase + '/_id/' + beer._id;
      return $http.put(url, beer);
    }

    this.remove = function(beer) {
      var url = urlBase + '/_id/' + beer._id;
      return $http.delete(url);
    }

    this.removeFromList = function($scope, beer) {
      var index = $scope.beers.indexOf(beer);
      $scope.beers.splice(index, 1);
    }
  }

  BeerService.$inject = ['$http'];

})();