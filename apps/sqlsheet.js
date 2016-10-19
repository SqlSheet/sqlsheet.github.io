var sqlsheet = angular.module('sqlsheet', ['ngRoute']);


sqlsheet.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/apps/home/home.html',
        controller: 'HomeController',
        controllerAs: 'HomeCtrl',
      }).
      when('/docs', {
        templateUrl: '/apps/docs/docs.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
