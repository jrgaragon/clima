const place = require('./place/place');
const argv = require('./config/yargs').argv;

//https://developers.google.com/maps/documentation/geocoding/start
//https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI

place.getPlaceLatLng(argv.direccion)
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });

console.log(argv);