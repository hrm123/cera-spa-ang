( function(){

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http){
        var svc = {};
                     
        svc.getAllCategories = function()
        {
            return $http.get('https://davids-restaurant.herokuapp.com/categories.json').then(function (result) {
                // process result and only keep items that match
                var foundItems = result.data.menu_items.filter( function( item ) { return item.description.indexOf(searchTerm) >0; } )
                // return processed items
                return foundItems;
            });
        }

        svc.getItemsForCategory = function(categoryShortName)
        {
            return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json?category='+categoryShortName).then(function (result) {
                // process result and only keep items that match
                var foundItems = result.data.menu_items.filter( function( item ) { return item.description.indexOf(searchTerm) >0; } )
                // return processed items
                return foundItems;
            });
        }

        return svc;
        
    }
    

})();