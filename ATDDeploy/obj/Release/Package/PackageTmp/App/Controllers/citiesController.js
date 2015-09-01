angular.module('ATD')
.controller('citiesController',
    ['$scope', '$q', '$location', '$routeParams', '$rootScope',       //add services names in single quotes
function ($scope, $q, $location, $routeParams, $rootScope) {    //add service names as params

    $rootScope.header = "Parts Coverage Area | Anderson Truck & Diesel";

    $rootScope.metadata = {
        'title': 'Parts Coverage Area | Anderson Truck & Diesel',
        'description': 'Our parts sales area covers most of northern and central Minnesota. Call for prices - 218-694-6872. We carry or can get most OEM and aftermarket parts.'
    };
}]);