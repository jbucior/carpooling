module.exports = function (Ride, $state, toaster, $scope) {
    function getCity(place){
        try {
            return place.address_components[0].long_name;
        }catch (e){
            return place;
        }
    };

    this.addRide = function() {
        this.ride.cityFrom = getCity(this.placeFrom);
        this.ride.cityTo = getCity(this.placeTo);
        this.ride.rideDate = Date.parse(this.rideDate);
        console.log(this.ride);
        Ride.save({}, this.ride, function () {
            toaster.pop('success', "Sukces!", "Dodano przejazd!");
        }, function () {
            toaster.pop('error', "Błąd!", "Wystąpił błąd serwisu!");
        });
    }
};