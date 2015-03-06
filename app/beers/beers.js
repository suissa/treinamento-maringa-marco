(function(){

  'use strict';

  angular.module('myApp.beers', ['ngRoute',
    'myApp.beers.Filters',
    'myApp.beers.Services',
    'myApp.beers.Controllers',
    'myApp.beers.Directives'
    ])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/beers', {
        templateUrl: 'beers/beers.html',
        controller: 'BeersListCtrl'
      })
      .when('/beers/create', {
        templateUrl: 'beers/create.html',
        controller: 'BeersCreateCtrl'
      })
      .when('/beers/:id', {
        templateUrl: 'beers/get.html',
        controller: 'BeersGetCtrl'
      })
      .when('/beers/:id/edit', {
        templateUrl: 'beers/edit.html',
        controller: 'BeersEditCtrl'
      });
  }])
  ;

})();






