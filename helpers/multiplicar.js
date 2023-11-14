const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (tabla, listar, limite) => {
    try {


        let salida = '';


        for (let i = 1; i <= limite; i++) {
            salida += (`${tabla} x ${i} = ${tabla * i}\n`);
        }
        if (listar) {
            console.log('====================')
            console.log(`Tabla del ${tabla}`);
            console.log('====================')
            console.log(salida);
        } 
            fs.writeFileSync(`./salida/tabla-${tabla}.txt`, salida)
        
            
        return `tabla-${tabla}.txt`;
    } catch (error) {
        throw error;
    }



}

module.exports = {
    crearArchivo,
}