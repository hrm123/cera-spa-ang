(function(){
    'use strict';
    var app = angular.module('MyShoppingListApp',[]);
    app.controller('ToBuyShoppingController', ToBuyShoppingCtrl);
    app.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingCtrl);
    app.service('ShoppingListCheckOffService', ShoppingListCheckOffSvc);
    
    function ShoppingListCheckOffSvc(){
        var svc = this;
        svc.ToBuy = [{ name: "Cookies", quantity: 10 },
        { name: "Biscuit", quantity: 11 },
        { name: "Soda", quantity: 12 }, 
        { name: "Chips", quantity: 13 }, 
        { name: "Mint", quantity: 14 }];
        
        svc.AlreadyBought = [];
        
        svc.BoughtItem = function(item)
        {
            svc.ToBuy = svc.ToBuy.filter( function(item1){ return item1 != item});
            svc.AlreadyBought.push(item);
        }
        
    }
    
    function AlreadyBoughtShoppingCtrl(ShoppingListCheckOffService){
        var bought = this;
        bought.ItemList = ShoppingListCheckOffService.AlreadyBought;
    }
    
    function ToBuyShoppingCtrl(ShoppingListCheckOffService){
        var buy = this;
        buy.ItemList = ShoppingListCheckOffService.ToBuy;
        buy.itemBought = function(item)
        {
            ShoppingListCheckOffService.BoughtItem(item);
            buy.ItemList = ShoppingListCheckOffService.ToBuy;
        };
        
    }
    
    ToBuyShoppingCtrl.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtShoppingCtrl.$inject = ['ShoppingListCheckOffService'];
})();