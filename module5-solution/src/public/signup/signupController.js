(function () {
"use strict";

angular.module('public')
.controller('signUpController', SignUpController);

SignUpController.$inject = ['MenuService'];

function SignUpController(MenuService) {
  var $ctrl = this;
  $ctrl.saveSucess = false;
  $ctrl.serverError = false;
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
        'menuNumber':''
    };
  }
  $ctrl.userPrefs = userPrefs;

  $ctrl.submit = function(){
    var resp = MenuService.getMenuItemsByName($ctrl.userPrefs.menuNumber);
    if(!resp)
    {
        $ctrl.saveSucess = false;
    }
    else{
        $ctrl.saveSucess = MenuService.storeUserPrefs($ctrl.userPrefs)
    }
  }
}

})();
