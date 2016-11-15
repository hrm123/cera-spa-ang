(function(){
    var app = angular.module('MenuApp');
    app.config(routesConfig);

    
    routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to tab 1 if no other URL matches
    $urlRouterProvider.otherwise('/cera-spa-ang/module4-solution/home');

    // Set up UI states
    $stateProvider
        .state('items', {
        url: '/cera-spa-ang/module4-solution/items/:categoryName',
        templateUrl: 'items.html',
        controller: 'MenuController as ctrl'
        })

        .state('categories', {
        url: '/cera-spa-ang/module4-solution/categories',
        templateUrl: 'categories.html',
        controller: 'MenuController as ctrl'
        })

        .state('home', {
        url: '/cera-spa-ang/module4-solution/home',
        templateUrl: 'home.html',
        controller: 'MenuController as ctrl'
        });
    }
    

})();