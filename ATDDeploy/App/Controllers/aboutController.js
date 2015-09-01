angular.module('ATD')
.controller('aboutController',
    ['$scope', '$q', '$location', '$routeParams', '$rootScope',       //add services names in single quotes
function ($scope, $q, $location, $routeParams, $rootScope) {    //add service names as params

    $rootScope.header = "Anderson Truck & Diesel - About";

    $rootScope.metadata = {
        'title': 'About Us | Anderson Truck & Diesel',
        'description': 'Anderson Truck & Diesel is a family owned and operated business, open since 1990. We learned long ago the need for prompt service and the need to keep our customers up and running.'
    };
}]);