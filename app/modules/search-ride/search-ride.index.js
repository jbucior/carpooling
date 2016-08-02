module.exports = angular.module("CarazemApp.searchride",['google.places', 'angularjs-datetime-picker'])
    .config(function ($stateProvider) {
        $stateProvider
            .state("searchride", {
                url: '/',
                templateUrl: 'modules/search-ride/view/search-ride-form.html',
                controller: "SearchRideSearchCtrl",
                controllerAs: "ctrl"
            })
    })
    .controller("SearchRideSearchCtrl", require("./controller/search-ride.search.ctrl"))
    .factory("Ride", require("../add-ride/factory/ride.factory.js"))