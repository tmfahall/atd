angular.module('ATD')
.controller('partsController',
    ['$scope', '$q', '$location', '$routeParams', '$rootScope', '$window',      //add services names in single quotes
function ($scope, $q, $location, $routeParams, $rootScope, $window) {    //add service names as params
    $rootScope.header = "Anderson Truck & Diesel - Parts"

    $rootScope.metadata = {
        'title': 'Parts Coverage Area | Anderson Truck & Diesel',
        'description': 'We sell parts across most of northern Minnesota. Call for prices - 218-694-6872.  We carry or can get most OEM and aftermarket parts.'
    }

    $scope.brandsCarried = ["Dayton", "Hutch", "Transpro", "Reyco", "Hendrickson", "Timkin", "SKF", "C/R Chicago Rawhide", "Gunite", "Webb", "CodMet", "Eaton", "Spicer", "Fuller", "Roadranger", "Meritor", "Rockwell", "Ridewell", "Neway", "Holland", "Fontaine", "Jowst", "Interstate", "Ford", "Powerstroke", "United Pacific", "Shell", "Rotella", "Rimula", "Chelsea", "Muncie", "PAI", "IPD", "Wabco", "Firestone", "Bridgestone", "Michellen", "Sailun", "Dayton Tire", "Hankook", "Continental", "General", "Transforce", "Double Coin", "Towmax", "Trucklite", "Grote", "Bendix", "Midland", "Holset", "Serco", "Hood", "Parker", "Euclid", "TRP", "Balance Master", "Delco", "Leece Neville", "Dorman", "Auto Mann", "Wix", "Unique", "BWP", "Phillips Termco", "Dayco", "Gates", "OK Tire", "Bandag"];

    $scope.alphabet = ['A', 'B', 'C', 'D', 'E', 'F',
                     'G', 'H', 'I', 'J', 'K', 'L',
                     'M', 'N', 'O', 'P', 'Q', 'R',
                     'S', 'T', 'U', 'V', 'W', 'X',
                     'Y', 'Z'];

}]);