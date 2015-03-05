(function(){

  'use strict';

  angular.module('myApp.beers.Controllers', [])
  .controller('BeersListCtrl', BeersListCtrl)
  .controller('BeersGetCtrl', BeersGetCtrl)
  .controller('BeersCreateCtrl', BeersCreateCtrl)
  .controller('BeersEditCtrl', BeersEditCtrl)

  function BeersListCtrl($scope, $http, BeerService) {

    $scope.predicate = 'abv';
    $scope.reverse = true;

    BeerService
    .list()
    .success(function(data) {
      // console.log('Listagem: ', data);
      $scope.beers = data;
      $scope.msg = 'Listagem das cervejas concluídas!';
    })
    .error(function(err) {
      console.log('Erro: ' + err);
      $scope.msg = 'Erro: ' + err;
    })

    $scope.remove = function(beer) {
      var url = 'http://localhost:3000/api/beers/_id/'+beer._id
        , method = 'DELETE'
        ;

      if(confirm('Você realmente deseja remover '+beer.name+'?')) {
        BeerService
        .remove(beer)
        .success(function(data) {
          BeerService.removeFromList($scope, beer);
        })
        .error(function(err) {});
      }
    }
  }

  function BeersGetCtrl($scope, $http, $routeParams, BeerService) {
    var id = $routeParams.id;

    BeerService
    .get(id)
    .success(function(data) {
      $scope.beer = data;
    })
    .error(function(err) {
      console.log('ERRO: ', err);
    })
  }

  function BeersCreateCtrl ($scope, $http, BeerService) {
    $scope.create = function(beer) {
      var url = 'http://localhost:3000/api/beers'
        , method = 'POST'
        ;

      BeerService
      .create(beer)
      .success(function(data) {
        $scope.beerNew = data;
      })
      .error(function(err) {
        console.log('ERRO: ', err);
      })
    }
  }

  function BeersEditCtrl($scope, $http, $routeParams, BeerService) {

    var id = $routeParams.id;

    BeerService
    .get(id)
    .success(function(data) {
      $scope.beer = data;
    })
    .error(function(err) {
      console.log('ERRO: ', err);
    })

    $scope.save = function(beer) {
      var id = $routeParams.id;

      BeerService
      .edit(beer)
      .success(function(data) {
        $scope.msg = 'Cerveja alterada com sucesso!!!';
      })
      .error(function(err) {
        console.log('ERRO: ', err);
        $scope.msg = 'Cerveja não alterada!!! ' + err;
      })
    }
  }

  BeersListCtrl.$inject = ['$scope', '$http', 'BeerService'];
  BeersGetCtrl.$inject = ['$scope', '$http', '$routeParams', 'BeerService'];
  BeersCreateCtrl.$inject = ['$scope', '$http', 'BeerService'];
  BeersEditCtrl.$inject = ['$scope', '$http', '$routeParams', 'BeerService'];

})();

