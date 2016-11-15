(function(){
     var app = angular.module('MenuApp');
     app.component('menuCategories',{
         template: "<ul ng-repeat='item in $ctrl.categoryData'><li>item</li></ul>",
         bindings:{
             categoryData:'<'
         },
         controllerAs: '$ctrl',
         bindToController: true,
         controller: 'menuCategoriesController'
     });

     function menuCategoriesController(){
         this.$onInit = function() {
            debugger;  
         };

        this.$onChanges = function (changesObj) {
            debugger;
        };
     }
})();