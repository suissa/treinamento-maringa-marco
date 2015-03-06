(function(){

  'use strict';

  angular.module('myApp.beers.Directives', [])
  .directive('cervejaNome', [cervejaNomeDirective])
  .directive('cervejaAbv', [cervejaABVDirective])
  .directive('cervejaDescription', [cervejaDescriptionDirective])
  .directive('cervejaAcaoEditar', [cervejaAcaoEditarDirective])
  .directive('cervejaAcaoRemover', [cervejaAcaoRemoverDirective])
  // .directive('beerInputFilter', [BeerInputFilterDirective])
  ;

  function cervejaNomeDirective() {
    return {
      replace: true,
      template: '<a href="#/beers/{{beer._id}}">{{beer.name}}</a>',
      restrict: 'E',
      scope: true,
      link: function($scope, $element, $attrs) {

      }
    }
  }

  function cervejaABVDirective() {
    return {
      replace: true,
      template: '<a href="#/beers/{{beer._id}}">{{beer.abv}}</a>',
      restrict: 'E',
      scope: true,
      link: function($scope, $element, $attrs) {

      }
    }
  }

  function cervejaDescriptionDirective() {
    return {
      replace: true,
      template: '<a href="#/beers/{{beer._id}}">{{beer.description | truncate:50 }}</a>',
      restrict: 'E',
      scope: true,
      link: function($scope, $element, $attrs) {

      }
    }
  }

  function cervejaAcaoEditarDirective() {
    return {
      replace: true,
      template: '<a href="#/beers/{{beer._id}}/edit">Editar</a>',
      restrict: 'E',
      scope: true,
      link: function($scope, $element, $attrs) {

      }
    }
  }

  function cervejaAcaoRemoverDirective() {
    return {
      replace: true,
      template: '<span class="clickable" data-ng-click=\'remove(beer)\'>Remover</span>',
      restrict: 'E',
      scope: true,
      link: function($scope, $element, $attrs) {

      }
    }
  }

  function BeerInputFilterDirective($rootScope) {
    return {
      replace: true,
      template: '<input type="text" id="filtro" placeholder="Digite aqui" />',
      restrict: 'E',
      scope: false,
      link: function($scope, $element, $attrs) {
        $element.on('blur', function() {
          alert('BLUR');
          $scope.$root.$emit('evento', 'Emitindo evento')
          console.log($scope.$root);
        })
      }
    }
  }
})();