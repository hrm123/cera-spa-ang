( function(){
    var app = angular.module('MenuApp');
    app.controller('MenuController', menuController);


    menuController.$inject = ["$http","MenuDataService","$scope"];
    
    function menuController($http,MenuDataService,$scope){
        var ctrl = this;
        ctrl.categories= {'data' : []};
        ctrl.items=[];
        ctrl.pfx  = 'pfx1';

        /*
        $scope.$watch(angular.bind(this,function(){
            return this.categories;
        }), function(newVal){
            debugger;
        }); 

         $scope.$watch(angular.bind(this,function(){
            return this.pfx;
        }), function(newVal){
            debugger;
        }); 
        */

        MenuDataService.getAllCategories().then(function(data) {
             ctrl.pfx  = 'pfx2';
             ctrl.categories = { 'data' : angular.copy(data) };
            });
    }

    
})();
