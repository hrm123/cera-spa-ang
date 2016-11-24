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
    MenuService.getMenuItemsByName($ctrl.userPrefs.menuNumber).then(function(d){
        if(!d)
        {
            $ctrl.saveSucess = false;
            $ctrl.serverError = true;
        }
        else{
            $ctrl.saveSucess = MenuService.storeUserPrefs($ctrl.userPrefs);
            $ctrl.serverError = false;
        }
    });
    
  }
}

})();
