import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

function verificarDatos(username: string, password: string): boolean {
  // verificar los datos en la base de datos
}

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (verificarDatos(username, password)) {
    res.status(200).json({ success: true, message: 'Login correcto' });
  } else {
    res.status(401).json({ success: false, message: 'Credenciales inválidas' });
  }
});

// Levantamos el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
