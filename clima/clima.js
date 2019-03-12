const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b887fbd0591d03886917e755a859322b&units=metric`);

    return resp.data.main.temp;
};

module.exports = {
    getClima
}