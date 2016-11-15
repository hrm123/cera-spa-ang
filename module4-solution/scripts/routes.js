(function(){
    var app = angular.module('menuApp');
    app.config(function($routeProvider, $locationProvider) {
        $routeProvider
        .when('/items/:categoryName', {
            templateUrl: 'items.html',
            controller: 'MenuController as ctrl',
            resolve: {
            // I will cause a 1 second delay
            delay: function($q, $timeout) {
                var delay = $q.defer();
                $timeout(delay.resolve, 1000);
                return delay.promise;
            }
            }
        })
        .when('/categories', {
            templateUrl: 'categories.html',
            controller: 'MenuController as ctrl'
        })
        .when('/', {
            templateUrl: 'home.html',
            controller: 'MenuController as ctrl'
        });

        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode(true);
    });
})();