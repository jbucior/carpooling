module.exports = function ($window, $scope, Ride) {
    function getCity(place){
        try {
            return place.address_components[0].long_name;
        }catch (e){
            return place;
        }
    };

    this.rides = [];
    $window.scope=$scope;

    this.submit = function(ride) {
        ride.cityFrom = getCity(ride.cityFrom);
        ride.cityTo = getCity(ride.cityTo);
        console.log("takie cudo poleci na backend", ride);
        Ride.query(ride, rds => this.rides = rds);
        
    }
};