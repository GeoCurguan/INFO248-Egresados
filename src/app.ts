import crear_db from "./db/crear_db"
import drop_db from "./db/drop_db";
const readline = require('readline');

// Creamos base de datos
crear_db(); 

// Solo para fines practios al hacer CTRL + C, se elimina la db
process.on('SIGINT', () => {
    console.log('Se ha recibido la señal SIGINT (CTRL+C).');
    drop_db();
    process.exit();
});
