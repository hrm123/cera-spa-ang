(function(){
     var app = angular.module('MenuApp');
     app.component('categoryItems',{
         template: "<ul ng-repeat='item in $ctrl.categoryData'><li>item</li></ul>",
         bindings:{
             itemsData:'<'
         },
         controllerAs: '$ctrl',
         bindToController: true
     });
})();