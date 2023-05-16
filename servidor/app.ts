import express from "express";
import bodyParser from "body-parser";
import crearDatabase from "./src/routes/creardb"
import borrarDatabase from "./src/routes/borrardb"

// Inicializamos express
const app = express();

// Middleware para parsear el body de las peticiones
app.use(bodyParser.json());

// Rutas
app.use("/creardb", crearDatabase);
app.use("/borrardb", borrarDatabase);

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto http://localhost:3000");
});
