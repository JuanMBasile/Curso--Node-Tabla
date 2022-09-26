const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

const crearArchivo = async(base = 5, listar = false,  hasta = 10 ) => {
    try {
        let salida = '';
        for (let index = 1; index <= hasta; index++) {
            const total = base * index;
            salida += `${base} * ${index} = ${total}\n`;
        }
    
        if(listar) {
            console.log('========================')
            console.log('tabla del', base)
            console.log('========================')
            console.log(salida);
        }
        
    
    
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);


        return `tabla-${base}.txt`;
        
    } catch(error) {
        throw error;
    }
        
}



//exportar la funcion porque esta en ambito privado
module.exports = {
    crearArchivo
}