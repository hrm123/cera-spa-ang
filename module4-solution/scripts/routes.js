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
        templateUrl: 'items.html',
        controller: 'MenuController as ctrl'
        })

        .state('categories', {
        url: '/categories',
        templateUrl: 'categories.html',
        controller: 'MenuController as ctrl'
        })

        .state('home', {
        url: '/home',
        templateUrl: 'home.html',
        controller: 'MenuController as ctrl'
        });
    }
    

})();