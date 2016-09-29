(function(){
    'use strict';
    var app = angular.module('NarrowItDownApp',[]);
    app.controller('NarrowItDownController', narrowItDownController);
    app.factory('MenuSearchService', menuSearchSvc);
    app.directive("foundItems", foundItemsWidget);
    
    function foundItemsWidget(){
        var ddo = {
            scope:{
                itemsFound:"<",
                onRemove:"&"
            },
            template:"<ul> <li ng-repeat='item in foundItems'> {{item.description}} </li>  </ul>"
        }
        return ddo;
    }
        
    narrowItDownController.$inject = ["MenuSearchService"];
    
    function narrowItDownController(MenuSearchService){
        var ctrl = this;
        ctrl.foundItems = [];
        ctrl.searchTerm = '';
        
        ctrl.loadItems = function(){
            ctrl.foundItems = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
        }
        
        ctrl.removeItem = function(itemIndex){
            ctrl.foundItems = ctrl.foundItems.splice( itemIndex,1);
        }
    }
    
    menuSearchSvc.$inject = ['$http'];
    function menuSearchSvc($http){
        var svc = {};
                     
        svc.getMatchedMenuItems = function(searchTerm)
        {
            return $http('https://davids-restaurant.herokuapp.com/menu_items.json').then(function (result) {
                // process result and only keep items that match
                debugger;
                var foundItems = result.menu_items.filter( function( item ) { return item.description.indexOf(searchTerm) >0; } )

                // return processed items
                return foundItems;
            });
        }
        return svc;
        
    }
    
    
})();