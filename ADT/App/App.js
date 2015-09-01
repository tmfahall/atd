/// <reference path="Views/services.html" />
angular.module('ATD', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

    $routeProvider.when('/', {        //home view
        templateUrl: 'home.html',
        controller: 'HomeController',
        caseInsensitiveMatch: true,
        title: 'Home',
        activetab: 'home'
    }).when('/about', {      //view about
        templateUrl: 'about.html',
        controller: 'aboutController',
        caseInsensitiveMatch: true,
        title: 'About',
        activetab: 'about'
    }).when('/services', {      //view services
        templateUrl: 'services.html',
        controller: 'servicesController',
        caseInsensitiveMatch: true,
        title: 'Services',
        activetab: 'services'
    }).when('/home', {      //view home
        templateUrl: 'home.html',
        controller: 'homeController',
        caseInsensitiveMatch: true,
        title: 'Home',
        activetab: 'home'
    }).otherwise('/');

}]);
