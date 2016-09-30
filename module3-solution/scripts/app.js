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
            template:"<div class='row' ng-repeat='item in itemsFound'> <div class='col-sm-12'> {{item.name}}, {{item.short_name}} , {{item.description}} <input type='button' ng-click='removeItem($index)' title='Dont want this one!'></input> </div> </div> <div class='row' ng-hide='nidCtrl.msg.length===0' ><div class='col-sm-3'>{{msg}}</div></div>",
            controller: function($scope){
                $scope.removeItem=function(removeIndex){
                    $scope.onRemove({itemIndex:removeIndex});
                };
            }
        }
        return ddo;
    }
        
    narrowItDownController.$inject = ["MenuSearchService"];
    
    function narrowItDownController(MenuSearchService){
        var ctrl = this;
        ctrl.foundItems = [];
        ctrl.searchTerm = '';
        ctrl.msg = "";
        
        ctrl.loadItems = function(){
            ctrl.foundItems = [];
            if(ctrl.searchTerm === null || ctrl.searchTerm.trim().length === 0)
            {
                ctrl.msg = "Nothing found";
                return;
            }
            MenuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(function(data) { ctrl.foundItems = data;});
            
        }
        
        ctrl.removeItem = function(itemIndex){
           ctrl.foundItems.splice( itemIndex+1,1);
        }
    }
    
    menuSearchSvc.$inject = ['$http'];
    function menuSearchSvc($http){
        var svc = {};
                     
        svc.getMatchedMenuItems = function(searchTerm)
        {
            return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json').then(function (result) {
                // process result and only keep items that match
                var foundItems = result.data.menu_items.filter( function( item ) { return item.description.indexOf(searchTerm) >0; } )
                // return processed items
                return foundItems;
            });
        }
        return svc;
        
    }
    
    
})();