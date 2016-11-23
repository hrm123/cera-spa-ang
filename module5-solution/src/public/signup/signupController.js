(function () {
"use strict";

angular.module('public')
.controller('signUpController', SignUpController);

SignUpController.$inject = ['MenuService'];

function SignUpController(MenuService) {
  var $ctrl = this;

  /*
  $ctrl.firstName = '';
  $ctrl.lastName = '';
  $ctrl.firsNameLen = 4;
  $ctrl.lastNameLen = 4;
  $ctrl.maxLenName =  20;
  $ctrl.email = '';
  $ctrl.phone = '';
  $ctrl.menuNumber = '';
  */

  var userPrefs = MenuService.getUserPrefs();
  if(!userPrefs){
    userprefs ={
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

  $ctrl.submit = function(){
      MenuService.storeUserPrefs(userPrefs);
  }
}

})();
