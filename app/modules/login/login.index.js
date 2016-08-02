module.exports = angular.module("CarazemApp.login",['firebase'])
    .config(function ($stateProvider) {
        $stateProvider
            .state("login", {
                url: '/login',
                templateUrl: 'modules/login/view/login-form.html',
                controller: "LoginCtrl",
                controllerAs: "ctrl"
            })
    })
    .controller("LoginCtrl", require("./controller/login.index"));
