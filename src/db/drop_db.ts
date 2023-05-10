import { connection } from './connection'

const drop_db = () => {
        // Crear la base de datos
        connection.query('DROP DATABASE db_egresados', (err, result) => {
            console.log('Base de datos eliminada: db_egresados');
            if (err) throw err;
        });
};

export default drop_db;