module.exports = function ($firebaseAuth, $http, AUTH, BASE_URL) {
    var auth = $firebaseAuth();

    auth.$signInWithPopup("google").then(function(firebaseUser) {
        console.log("Signed in as:", firebaseUser.user.email);
        AUTH['X-AUTH-TOKEN'] = firebaseUser.credential.idToken;
        //$http.get(BASE_URL+'/login', AUTH);
        var url = BASE_URL + '/login';
        $http.get(url, { headers: AUTH });

    }).catch(function(error) {
        console.log("Authentication failed:", error);
    });

};