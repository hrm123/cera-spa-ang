(function(){
     var app = angular.module('MenuApp');
     app.component('menuCategories',{
         template: "{{prefix}} <ul ng-repeat='item in $ctrl.categoryData.data'><li>item.name</li></ul>",
         bindings:{
             categoryData:'<',
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