( function(){
    var app = angular.module('MenuApp');
    app.controller('MenuController', menuController);


    menuController.$inject = ["$http"];
    
    function menuController($http){
        var ctrl = this;
        ctrl.categories= [];
        ctrl.items=[];

    }

    
})();
