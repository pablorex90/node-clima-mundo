const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');



const getInfo = async(dire) => {

    try {
        const respLugar = await lugar.getLugarLatLng(dire);

        let respClima = await clima.getClima(respLugar.lat, respLugar.lng);

        return `El clima de ${respLugar.direccion} es de ${respClima.clima}`;
    } catch (e) {
        `No se pudo determinar el clima de ${dire}`
    }



    //El clima de XxxXX es de XX
    //No se pudo determinar el clima de XXXX
};

getInfo(argv.direccion).then(console.log).catch(console.log);