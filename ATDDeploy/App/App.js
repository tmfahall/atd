angular.module('ATD', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

    $routeProvider.when('/', {        //home view
        templateUrl: 'home.html',
        controller: 'homeController',
        caseInsensitiveMatch: true,
        activetab: 'home'
    }).when('/about', {      //view about
        templateUrl: 'about.html',
        controller: 'aboutController',
        caseInsensitiveMatch: true,
        activetab: 'about'
    }).when('/services', {      //view services
        templateUrl: 'services.html',
        controller: 'servicesController',
        caseInsensitiveMatch: true,
        activetab: 'services'
    }).when('/home', {      //view home
        templateUrl: 'home.html',
        controller: 'homeController',
        caseInsensitiveMatch: true,
        activetab: 'home'
    }).when('/parts', {      //view parts
        templateUrl: 'parts.html',
        controller: 'partsController',
        caseInsensitiveMatch: true,
        activetab: 'parts'
    }).when('/cities', {      //view cities
        templateUrl: 'cities.html',
        controller: 'citiesController',
        caseInsensitiveMatch: true,
        activetab: 'home'
    }).when('/eBay', {      //view eBay listings
        templateUrl: 'eBay.html',
        controller: 'eBayController',
        caseInsensitiveMatch: true,
        activetab: 'eBay'
    }).when('/amazon', {      //view Amazon Listings
        templateUrl: 'amazon.html',
        controller: 'amazonController',
        caseInsensitiveMatch: true,
        activetab: 'amazon'
    }).otherwise('/');

}]);
