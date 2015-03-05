angular.module('myApp.beers.Interceptor', [])
.factory('Interceptor',
  ['AuthInfoService', $q, function(AuthInfoService, $q) {
    return {
      request: function(config) {
        if (AuthInfoService.hasAuthHeader()) {
          config.headers['Authorization'] = AuthInfoService.getAuthHeader();
        }
        return config;
      }
      ,
      responseError: funcion(responseRejection) {
        if (responseError.status == 403) {
          AuthInfoService.redirectToLogin()
        }
        return $q.reject(responseRejection);
      }
    }
  }]);