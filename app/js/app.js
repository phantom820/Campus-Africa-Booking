var mainApp = angular.module("mainApp",['ui.bootstrap.pagination', 'ngAnimate','ngRoute','ngFileUpload']);

// configure the routing of the app
mainApp.config(function ($routeProvider) {       
    $routeProvider.when('/bookings', {
        templateUrl: 'app/views/bookings.html',
        controller: 'bookingsController'
    }).when('/buildings', {
        templateUrl: 'app/views/buildings.html',
    }).when('/Contact us', {
        templateUrl: 'app/views/contactUS.html',
    }).otherwise({
        redirectTo: "/"
    });
});