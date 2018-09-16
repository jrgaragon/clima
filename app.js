const place = require('./place/place');
const argv = require('./config/yargs').argv;
const clima = require('./clima/clima');

//https://developers.google.com/maps/documentation/geocoding/start
//https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI

//6b4a2ec970a0b4f8c65b90f438825734

let getInfo = async(direccion) => {
    let coors = await place.getPlaceLatLng(direccion);
    let temp = await clima.getClima(coors.lat, coors.lng);

    return `El clima de ${coors.direccion} es de ${ temp}`;
}

getInfo(argv.direccion)
    .then(m => console.log(m))
    .catch(err => console.log(err));