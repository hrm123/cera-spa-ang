(function () {
"use strict";

angular.module('public')
.controller('myInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService'];

function MyInfoController(MenuService) {
  var $ctrl = this;
  $ctrl.showPrefs = true;
  var userPrefs = MenuService.getUserPrefs();
  if(!userPrefs){
    $ctrl.showPrefs = false;
  }
  $ctrl.userPrefs = userPrefs;

}

})();
