import dotenv from 'dotenv';
import mysql from 'mysql2';
dotenv.config();

export const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  multipleStatements: true // permite hacer multiples consultas en una sola llamada a la db
});
