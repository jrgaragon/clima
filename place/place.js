const axios = require('axios');

const getPlaceLatLng = async(direccion) => {

    let encodeAddress = encodeURI(direccion);
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`;

    let result = await axios.get(url);

    let location = result.data.results[0];
    let coors = location.geometry.location;

    if (result.data.status === 'ZERO_RESULT') {
        throw new Error('No hay resultados');
    }

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getPlaceLatLng
}