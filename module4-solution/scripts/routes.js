(function(){
    var app = angular.module('MenuApp');
    app.config(routesConfig);

    
    routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to tab 1 if no other URL matches
    $urlRouterProvider.otherwise('/home');

    // Set up UI states
    $stateProvider
        .state('items', {
        url: '/items/:categoryName',
        templateUrl: '/cera-spa-ang/module4-solution/items.html',
        controller: 'MenuController as ctrl1'
        })

        .state('categories', {
        url: '/categories',
        templateUrl: '/cera-spa-ang/module4-solution/categories.html',
        controller: 'MenuController as ctrl2'
        })

        .state('home', {
        url: '/home',
        templateUrl: '/cera-spa-ang/module4-solution/home.html',
        controller: 'MenuController as ctrl'
        });
    }
    

})();