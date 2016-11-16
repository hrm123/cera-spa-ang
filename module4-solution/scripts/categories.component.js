(function(){
     var app = angular.module('MenuApp');
     app.component('menuCategories',{
         template: "<ul ng-repeat='item in $ctrl.categorydata.data'><li><a ui-sref='items/{{item.name}}'>{{item.name}}</a></li></ul>",
         bindings:{
             categorydata:'<'
         },
         controller: menuCategoriesController
     });

     function menuCategoriesController(){
         var ctrl = this;
         /*
         ctrl.$onInit = function() {
            debugger;  
         };

        ctrl.$onChanges = function (changesObj) {
            debugger;
        };
        */
     }
})();