(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.storeUserPrefs = function(userPrefsJson){
    if (typeof (Storage) !== "undefined")
    {
        localStorage.setItem("userprefs", userPrefsJson);
    }
    else{
      Console.log("No support for local storage");
    }
  }

  service.getUserPrefs = function(){
    if (typeof (Storage) !== "undefined")
    {
        return localStorage.getItem("userprefs");
    }
    else{
      Console.log("No support for local storage");
    }
  }

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

}



})();
