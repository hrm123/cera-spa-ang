( function(){
    var app = angular.module('MenuApp');
    app.controller('MenuController', menuController);


    menuController.$inject = ["$http","MenuDataService","$scope"];
    
    function menuController($http,MenuDataService,$scope){
        var ctrl = this;
        ctrl.categories= [];
        ctrl.items=[];
        MenuDataService.getAllCategories().then(function(data) {
             debugger; 
             ctrl.categories = angular.copy(data);
             $scope.$apply();
            });
    }

    
})();
