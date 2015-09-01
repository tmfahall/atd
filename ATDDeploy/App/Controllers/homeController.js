angular.module('ATD')
.controller('homeController',
    ['$scope', '$q', '$location', '$routeParams', '$rootScope',       //add services names in single quotes
function ($scope, $q, $location, $routeParams, $rootScope) {    //add service names as params

    $rootScope.header = "Anderson Truck & Diesel - Truck repair, parts and service";

    $rootScope.metadata = {
        'title': 'Truck Repair | Parts & Service | Anderson Truck & Diesel',
        'description': 'Anderson Truck & Diesel. Truck repair, parts and service. 218-694-6872. 2 miles west of Bagley on US Highway 2. 15635 US-2, Bagley, MN 56621.'
    };
}]);