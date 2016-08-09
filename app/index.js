require("angular");
require("angular-resource");
require("angular-ui-router");
require("angular-animate");
require("angularjs-toaster");
require("firebase");
require("angularfire");
require("angularjs-datetime-picker");
require("./modules/search-ride/search-ride.index");
require("./modules/add-ride/add-ride.index");
require("./modules/login/login.index");
angular.injector(['ng']).get("$http").get("/config").then(function (res) {
    angular.module("CarazemApp", [
        'ngResource',
        'ui.router',
        'toaster',
        'ngAnimate',
        'firebase',
        'CarazemApp.searchride',
        'CarazemApp.addride',
        'CarazemApp.login'
    ])
        .config(require("./config"))
        .constant('BASE_URL', res.data.backend || 'https://carazem2-api.herokuapp.com')
        // .constant('AUTH', {})
        // .config(function($httpProvider, AUTH) {
        //     $httpProvider.defaults.headers.post  = AUTH;
        // });

    angular.element(document).ready(function ($firebaseObject) {
        var config = {
            apiKey: "AIzaSyC8Zdc-j8nKLNSfH4_BORz76VsO0RYv46M",
            authDomain: "carazem2.firebaseapp.com",
            databaseURL: "https://carazem2.firebaseio.com",
            storageBucket: "carazem2.appspot.com",
        };
        firebase.initializeApp(config);
        angular.bootstrap(document, ['CarazemApp']);
    });
});
