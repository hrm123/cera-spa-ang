(function () {
"use strict";

angular.module('public')
.controller('signUpController', SignUpController);

//SignUpController.$inject = ['menuItems'];
function SignUpController(menuItems) {
  var $ctrl = this;
  $ctrl.firstName = '';
  $ctrl.lastName = '';
  $ctrl.firsNameLen = 4;
  $ctrl.lastNameLen = 4;
  $ctrl.maxLenName =  20;
  $ctrl.email = '';
  $ctrl.phone = '';
  $sctrl.menuNumber = '';
}

})();
