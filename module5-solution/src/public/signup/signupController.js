(function () {
"use strict";

angular.module('public')
.controller('signUpController', SignUpController);

SignUpController.$inject = ['MenuService'];

function SignUpController(MenuService) {
  var $ctrl = this;
  var userPrefs = MenuService.getUserPrefs();
  if(!userPrefs){
    userPrefs ={
        'firstName' : '',
        'lastName': '',
        'firsNameLen' :4,
        'lastNameLen':4,
        'maxLenName':20,
        'email':'',
        'phone':'',
        menuNumber:''
    };
  }
  $ctrl.userPrefs = userPrefs;

  $ctrl.submit = function(userprefs){
      MenuService.storeUserPrefs(userPrefs);
  }
}

})();
