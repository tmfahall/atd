angular.module('ATD')
.controller('partsController',
    ['$scope', '$q', '$location', '$routeParams', '$rootScope', '$window',      //add services names in single quotes
function ($scope, $q, $location, $routeParams, $rootScope, $window) {    //add service names as params
    $rootScope.header = "Anderson Truck & Diesel - Parts"

    $rootScope.metadata = {
        'title': 'Parts Coverage Area | Anderson Truck & Diesel',
        'description': 'We sell parts across most of northern Minnesota. Call for prices - 218-694-6872.  We carry or can get most OEM and aftermarket parts.'
    }

}]);