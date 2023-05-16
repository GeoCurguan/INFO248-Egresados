import { connection } from './connection'

const borrarDatabase = () => {
    connection.query('DROP DATABASE db_egresados', (err, result) => {
        console.log('Base de datos eliminada: db_egresados');
        if (err) throw err;
    });
};

export default borrarDatabase;