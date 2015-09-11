angular.module('ATD')
.controller('widgetController',
    ['$scope', '$q', '$location', '$routeParams', '$rootScope',       //add services names in single quotes
function ($scope, $q, $location, $routeParams, $rootScope) {    //add service names as params

    $rootScope.header = "Anderson Truck & Diesel - Widget";

    $rootScope.metadata = {
        'title': 'Widgets | Anderson Truck & Diesel', //Title that you would see on google search
        'description': '' //Description that you would see on google search
    };
}]);