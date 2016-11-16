(function(){
     var app = angular.module('MenuApp');
     app.component('items',{
         template: "<ul ng-repeat='item in $ctrl.itemsdata.menu_items'><li>{{$ctrl.getItemDisplayName(item)}}</li></ul>",
         bindings:{
             itemsdata:'<'
         },
        controller: categoryItemsController
     });

     function categoryItemsController(){
         var ctrl = this;

         ctrl.getItemDisplayName = function(item){
             if(item.description){ return item.description; } else { return item.name; }
         }
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