import crear_db from "./src/db/crear_db"
import drop_db from "./src/db/drop_db";
import { Perfil } from "./src/components/perfil/perfil";
// Creamos base de datos con informacion
// crear_db(); 

// const perfil = new Perfil('Manuel', 'manuel.care@alumnos.uach.cl', '87654321', 'informatica', 2025);
// console.log("nombre: " + perfil.getNombre());

// Solo para fines practios al hacer CTRL + C, se elimina la db
// process.on('SIGINT', () => {
//     console.log('Se ha recibido la señal SIGINT (CTRL+C).');
//     drop_db();
//     process.exit();
// });
