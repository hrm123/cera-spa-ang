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
                onRemove:"&",
                msg:"<"
            },
            template:"<div class='row' ng-repeat='item in itemsFound'> <div class='col-sm-12'> {{item.name}}, {{item.short_name}} , {{item.description}} <input type='button' ng-click='removeItem($index)'>Dont want this one!</input> </div> </div> <div class='row' ng-hide='nidCtrl.msg.length===0' ><div class='col-sm-3'>{{msg}}</div></div>",
            controller: function($scope){
                debugger;
                $scope.removeItem=function(removeIndex){
                    debugger;
                    $scope.onRemove({index:removeIndex});
                };
            }
        }
        return ddo;
    }
        
    narrowItDownController.$inject = ["MenuSearchService"];
    
    function narrowItDownController(MenuSearchService){
        var ctrl = this;
        ctrl.foundItems = [{
            description: "chicken soup with egg drop and won tons",
            id:881,
            large_portion_name:"quart",
            name:"Egg Drop with Won Ton Soup",
            price_large:6,
            price_small:3,
            short_name:"A5",
            small_portion_name:"pint"}
        ];
        ctrl.searchTerm = '';
        ctrl.msg = "";
        
        ctrl.loadItems = function(){
            debugger;
            ctrl.foundItems = [];
            if(ctrl.searchTerm === null || ctrl.searchTerm.trim().length === 0)
            {
                ctrl.msg = "Nothing found";
                return;
            }
            MenuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(function(data) { debugger; ctrl.foundItems = data;});
            
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
            return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json').then(function (result) {
                // process result and only keep items that match
                debugger;
                
                var foundItems = result.data.menu_items.filter( function( item ) { return item.description.indexOf(searchTerm) >0; } )

                // return processed items
                return foundItems;
            });
        }
        return svc;
        
    }
    
    
})();