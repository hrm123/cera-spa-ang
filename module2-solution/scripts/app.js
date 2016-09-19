(function(){
    'use strict';
    var app = angular.module('MyShoppingListApp',[]);
    app.controller("ToBuyShoppingController ", ToBuyShoppingCtrl)
    app.controller("AlreadyBoughtShoppingController ", AlreadyBoughtShoppingCtrl);
    app.service("ShoppingListCheckOffService", ShoppingListCheckOffSvc);
    
    
    function ShoppingListCheckOffSvc(){
        this.ToBuy = [{ name: "Cookies", quantity: 10 },{ name: "Biscuit", quantity: 11 },
        { name: "Soda", quantity: 12 }, { name: "Chips", quantity: 13 }, { name: "Mint", quantity: 14 }];
        
        this.AlreadyBought = [];
        
        this.BoughtItem = function(item)
        {
            this.ToBuy = this.ToBuy.filter( function(item1){ return item1 != item});
            this.AlreadyBought.push(item);
        }
        
    };
    
    function AlreadyBoughtShoppingCtrl(ShoppingListCheckOffService){
        var bought = this;
        bought.ItemList = ShoppingListCheckOffService.AlreadyBought;
    };
    
    function ToBuyShoppingCtrl(ShoppingListCheckOffService){
        var buy = this;
        buy.ItemList = ShoppingListCheckOffService.ToBuy;
        buy.itemBought = function(item)
        {
            ShoppingListCheckOffService.BoughtItem(item);
        };
        
    };
    
    ToBuyShoppingCtrl.$inject = ["ShoppingListCheckOffService"];
    AlreadyBoughtShoppingCtrl.$inject = ["ShoppingListCheckOffService"];
})();