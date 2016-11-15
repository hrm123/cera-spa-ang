( function(){
    var app = angular.module('MenuApp');
    app.controller('MenuController', menuController);


    menuController.$inject = ["$http","MenuDataService"];
    
    function menuController($http,MenuDataService){
        var ctrl = this;
        ctrl.categories= [];
        ctrl.items=[];
        MenuSearchService.getAllCategories().then(function(data) {
             debugger; 
             ctrl.categories = data;
            });
    }

    
})();
