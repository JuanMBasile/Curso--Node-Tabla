const argv = require('yargs')
     .option('b', {
         alias: 'base',
         type: 'number',
         demandOption: true,
         describe:'Es la base de la tabla de multiplicar'
     })
     .check((argv, options) => {
         if( isNaN(argv.b)) {
             throw 'La base tiene que ser un numero'
         }
         return true;
     })
     .option('l', {
         alias:'listar', 
         type: 'boolean',
         demandOption: true,
         default: false,
         describe: 'Muestra el listado de la tabla '
     })
     .option('h',  {
        alias: 'hasta',
        type: 'number', 
        default: 10,
        describe: 'Es hasta donde queremos realizar la operación'
     })
     .check((argv, options) => {
        if( isNaN(argv.h)) {
            throw 'Hasta debe ser un numero'
        }
        return true;
    })
     .argv; 

module.exports = argv;