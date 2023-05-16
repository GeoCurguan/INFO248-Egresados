import { connection } from './connection'
import * as fs from "fs";

// Copiar la ruta absoluta, la realativa da problemas
const path_sql: string = "/home/diegoh/ing_software/test-db/servidor/src/db/db.sql"
const sql = fs.readFileSync(path_sql, "utf8").trim();

const crearDatabase = () => {
  connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos');

    // Crear la base de datos
    connection.query('CREATE DATABASE IF NOT EXISTS db_egresados', (err, result) => {
      if (err) throw err;
      console.log('Base de datos creada: db_egresados');

      // Usar la base de datos
      connection.query('USE db_egresados', (err, result) => {
        if (err) throw err;
        console.log('Usando la base de datos: db_egresados');

        // Agregar tablas y data
        connection.query(sql, (err, result) => {
          if (err) throw err;
          console.log('Tablas creadas y data');
        });
      });
    });
  });
};

export default crearDatabase;