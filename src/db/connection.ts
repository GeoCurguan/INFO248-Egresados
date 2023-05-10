import dotenv from 'dotenv';
import mysql from 'mysql2';
dotenv.config();

// export const connection = mysql.createConnection({
//   host: process.env.PORT || 'localhost', // o la dirección de tu servidor de MySQL
//   user: process.env.DB_USER || 'diegoh', // el usuario de la base de datos
//   password: process.env.DB_PASS || '', // la contraseña del usuario de la base de datos
//   multipleStatements: true // permite hacer multiples consultas en una sola llamada a la db
// });

export const connection = mysql.createConnection({
    host: 'localhost', // o la dirección de tu servidor de MySQL
    user: 'diegoh', // el usuario de la base de datos
    password: '81384657', // la contraseña del usuario de la base de datos
    multipleStatements: true // permite hacer multiples consultas en una sola llamada a la db
});
