angular.module('ATD').factory('CityServices',
    ['$http', '$q', '$rootScope',
function ($http, $q, $rootScope) {

    var cities = [];
    var city = {};
    var errors = [];

    var serviceName = 'city';

    //define event messages
    var eventCitiesAllReceived = serviceName + ':all-cities-received';
    var eventCityLookupsReceived = serviceName + ':city-lookups-received';

    var eventCityReceived = serviceName + ':city-received';
    var eventCityAdded = serviceName + ':city-added';
    var eventCityUpdated = serviceName + ':city-updated';
    var eventCityDeleted = serviceName + ':city-deleted';
    var eventCityServiceError = serviceName + ':error';

    //return a emtpy object to fill for post of new city
    var NewCity = function () {
        city = {
            cityId: -1,
            cityName: ""
        };

        return city;
    }

    var getCitiesAll = function () {
        //setup promise
        var q = $q.defer();

        $http.get('/city/all')
        .success(function (data) {
            q.resolve(data);
        })
        .error(function (status) {
            q.reject(status);
        });

        q.promise
       .then(function (data) {
           cities.length = 0;

           for (var i in data.cities) {
               cities.push(data.cities[i]);
           }

           $rootScope.$broadcast(eventCitiesAllReceived);

       }, function (error) {
           errors.push({ error: error, timeStamp: new Date() });
           $rootScope.$broadcast(eventCityServiceError);

       });
    }



    var getCity = function (cityId) {
        //setup promise
        var q = $q.defer();

        $http.get('/city/' + cityId)
        .success(function (data) {
            q.resolve(data);
        })
        .error(function (status) {
            q.reject(status);
        });

        q.promise
       .then(function (data) {
           city = data;

           $rootScope.$broadcast(eventCityReceived);

       }, function (error) {
           errors.push({ error: error, timeStamp: new Date() });
           $rootScope.$broadcast(eventCityServiceError);
       });
    }


    var postCity = function (cityToUpdate) {
        //setup promise
        var q = $q.defer();

        city = cityToUpdate;

        $http.post('/city/post',
            city,
            {
                headers: { 'Content-Type': 'application/json' },
            })
        .success(function (data) {
            q.resolve(data);
        })
        .error(function (status) {
            q.reject(status);
        });

        q.promise
       .then(function (data) {
           city = data;

           $rootScope.$broadcast(eventCityReceived);

       }, function (error) {
           errors.push({ error: error, timeStamp: new Date() });
           $rootScope.$broadcast(eventCityServiceError);
       });
    }


    var deleteCity = function (cityToUpdate) {
        //setup promise
        var q = $q.defer();

        city = cityToUpdate;

        $http.post('/city/remove',
            cityToUpdate,
            {
                headers: { 'Content-Type': 'application/json' },
            })
        .success(function (data) {
            q.resolve(data);
        })
        .error(function (status) {
            q.reject(status);
        });

        q.promise
       .then(function (data) {
           city = NewCity();

           $rootScope.$broadcast(eventCityDeleted);

       }, function (error) {
           errors.push({ error: error, timeStamp: new Date() });
           $rootScope.$broadcast(eventCityServiceError);
       });
    }

    var getCityLookups = function () {
        //setup promise
        var q = $q.defer();

        $http.get('/city/lookup')
        .success(function (data) {
            q.resolve(data);
        })
        .error(function (status) {
            q.reject(status);
        });

        q.promise
       .then(function (data) {
           lookups = data;

           $rootScope.$broadcast(eventCityLookupsReceived);

       }, function (error) {
           errors.push({ error: error, timeStamp: new Date() });
           $rootScope.$broadcast(eventCityServiceError);
       });
    }

    var isValidCity = function () {
        if (city.hasOwnProperty('cityId')) {
            if (city.cityId > 0) {
                return true;
            }
        }

        return false;
    }

    var Cities = function () {
        return cities;
    }

    var City = function () {
        return city;
    }

    var Lookups = function () {
        return lookups;
    }

    return {
        getCitiesAll: getCitiesAll,
        getCity: getCity,
        getCityLookups: getCityLookups,
        postCity: postCity,
        deleteCity: deleteCity,
        Cities: Cities,
        City: City,
        Lookups: Lookups,
        NewCity: NewCity,
        isValidCity: isValidCity,

        eventCitiesAllReceived: eventCitiesAllReceived,
        eventCityLookupsReceived: eventCityLookupsReceived,
        eventCityReceived: eventCityReceived,
        eventCityUpdated: eventCityUpdated,
        eventCityDeleted: eventCityDeleted,
        eventCityServiceError: eventCityServiceError,
    }
}]);