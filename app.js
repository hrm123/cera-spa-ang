(function(){
    'use strict';
    var app = angular.module('myFirstApp',[]);
    app.controller("myFirstController", myFirstCtrl);
    function myFirstCtrl($scope){
        $scope.name = "Ram";
        $scope.sayHello = function()
        {
            return "Hello "
        }
    }
})();