(function(){
     var app = angular.module('MenuApp');
     app.component('menuCategories',{
         template: "<ul ng-repeat='item in $ctrl.categorydata.data'><li>{{item.name}}</li></ul>",
         bindings:{
             categorydata:'<',
             prefix : '<'
         },
         controller: menuCategoriesController
     });

     function menuCategoriesController(){
         var ctrl = this;
         ctrl.$onInit = function() {
            debugger;  
         };

        ctrl.$onChanges = function (changesObj) {
            debugger;
        };
     }
})();