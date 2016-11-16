( function(){
    var app = angular.module('MenuApp');
    app.controller('MenuController', menuController);


    menuController.$inject = ["$http","MenuDataService"];
    
    function menuController($http,MenuDataService){
        var ctrl = this;
        ctrl.categories= {'data' : []};
        ctrl.items=[];
        ctrl.pfx  = 'pfx1';
        MenuDataService.getAllCategories().then(function(data) {
             debugger; 
             ctrl.pfx  = 'pfx2';
             ctrl.categories = { 'data' : angular.copy(data) };
            });
    }

    
})();
