import express from "express";
import bodyParser from "body-parser";
import loginRouter from "./src/routes/login";
import usuarioRouter from "./src/routes/usuario";
import postRouter from "./src/routes/post";

// Inicializamos express
const app = express();

// Middleware para parsear el body de las peticiones
app.use(bodyParser.json());

// Rutas
app.use("/api/posts", postRouter);
app.use("/api/usuarios/", usuarioRouter);
app.use("/login", loginRouter);

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto http://localhost:3000");
});
