const axios = require('axios');

const getClima = async(lat, lng) => {

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=8ad8435585d569093d62ce69d8ad081d`

    let result = await axios.get(url);

    return result.data.main.temp;
};

module.exports = {
    getClima
};