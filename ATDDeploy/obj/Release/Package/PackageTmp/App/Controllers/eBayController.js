angular.module('ATD')
.controller('eBayController',
    ['$scope', '$q', '$location', '$routeParams', '$rootScope',       //add services names in single quotes
function ($scope, $q, $location, $routeParams, $rootScope) {    //add service names as params

    $rootScope.header = "Anderson Truck & Diesel - eBay Listings";

    $rootScope.metadata = {
        'title': 'eBay Listings | Anderson Truck & Diesel', //Title that you would see on google search
        'description': '' //Description that you would see on google search
    };
}]);