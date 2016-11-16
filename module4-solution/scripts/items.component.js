(function(){
     var app = angular.module('MenuApp');
     app.component('categoryItems',{
         template: "<ul ng-repeat='item in $ctrl.itemsdata.data.menu_items'><li>{{item.descrription}}</li></ul>",
         bindings:{
             itemsdata:'<'
         },
        controller: categoryItemsController
     });

     function categoryItemsController(){
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