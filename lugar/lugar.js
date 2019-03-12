const axios = require('axios');

const getLugarLatLng = async(direc) => {
    const encodeURL = encodeURI(direc);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: { 'X-RapidAPI-Key': '3d16a7cb2fmsh3cad0e32ff645c9p1f27a2jsn788ef4db24bf' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direc}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}