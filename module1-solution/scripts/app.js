(function(){
    'use strict';
    var app = angular.module('LunchCheck',[]);
    app.controller("LunchCheckController", lunchCheckCtrl);
    function lunchCheckCtrl($scope){
        $scope.name = "Ram";
        $scope.sayHello = function()
        {
            return "Hello "
        }
    }
})();