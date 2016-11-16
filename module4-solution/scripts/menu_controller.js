( function(){
    var app = angular.module('MenuApp');
    app.controller('MenuController', menuController);


    menuController.$inject = ["$http","MenuDataService","$scope","$stateParams"];
    
    function menuController($http,MenuDataService,$scope,$stateParams){
        var ctrl = this;
        ctrl.categories= {'data' : []};
        ctrl.items={'data' : []};

        MenuDataService.getAllCategories().then(function(data) {
             ctrl.categories = { 'data' : angular.copy(data) };
            });
        if($stateParams.categoryName){
           MenuDataService.getItemsForCategory($stateParams.categoryName).then(function(data){
               ctrl.items = data; 
            }
           )};
        } 
})();
