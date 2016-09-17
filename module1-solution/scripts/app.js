(function(){
    'use strict';
    var app = angular.module('LunchCheck',[]);
    app.controller("LunchCheckController", lunchCheckCtrl);
    function lunchCheckCtrl($scope){
        $scope.lunchItems = "";
        $scope.showMsg = false;
        $scope.msgErrorClass = "label label-danger";
        $scope.msgSuccessClass = "label label-success";
        $scope.msg="";
        $scope.msgClass = $scope.msgSuccessClass;
        $scope.msgs.enterData = "Please enter data first";
        $scope.msgs.manyItems = "Too much!";
        $scope.msgs.success = "Enjoy!";
        $scope.itemsChanged = function()
        {
            $scope.showMsg = false;
            
        };
        
        $scope.checkIfTooMuch = function()
        {
            if($scope.lunchItems.length === 0)
            {
                $scope.showMsg = true;
                $scope.msgClass = $scope.msgErrorClass;
                $scope.msg=$scope.msgs.enterData;
                return;
            }
            
            if($scope.lunchItems.split(",").length>3)
            {
                $scope.showMsg = true;
                $scope.msgClass = $scope.msgErrorClass;
                $scope.msg=$scope.msgs.manyItems;
                return;
            }
            else{
                $scope.showMsg = true;
                $scope.msgClass = $scope.msgErrorClass;
                $scope.msg=$scope.msgs.success;
                return;                
            }
            
        }
    }
})();