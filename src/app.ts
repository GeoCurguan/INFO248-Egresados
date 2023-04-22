import express from 'express';
import bodyParser from 'body-parser';
import usuarioRouter from './routes/usuario';

const app = express();

app.use(bodyParser.json());

app.use('/usuario', usuarioRouter);

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto http://localhost:3000');
});