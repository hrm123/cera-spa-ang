(function(){
     var app = angular.module('MenuApp');
     app.component('categoryItems',{
         template: "<ul ng-repeat='item in $ctrl.itemsData'><li>item</li></ul>",
         bindings:{
             itemsData:'<'
         },
        controller: categoryItemsController
     });

     function categoryItemsController(){
         var ctrl = this;
         /*
         ctrl.$onInit = function() {
            debugger;  
         };
         */
        ctrl.$onChanges = function (changesObj) {
            debugger;
        };
        
     }
})();