import express, { Request, Response } from "express";
import { auth } from "express-openid-connect";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// Configurar variables de entorno
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(auth({
    authRequired: false,
    auth0Logout: true,
    secret: process.env.AUTH0_CLIENT_SECRET,
    baseURL: 'http://localhost:3000',
    clientID: process.env.AUTH0_CLIENT_ID,
    issuerBaseURL: process.env.AUTH0_DOMAIN,
  }
));
const PORT = 3000;

// Middleware to make the `user` object available for all views
app.use(function (req, res, next) {
  res.locals.user = req.oidc.user;
  next();
});

// Ruta de inicio
app.use("/", (req: Request, res: Response) => {
  res.send("¡Hola, mundo!");
});

//Ruta de inicio de sesión
// app.get('/login', (req: Request, res: Response) => {
//   res.redirect(`https://${process.env.AUTH0_DOMAIN}/authorize?
//               response_type=code&
//               client_id=${process.env.AUTH0_CLIENT_ID}&
//               redirect_uri=${process.env.AUTH0_CALLBACK_URL}`);
// });
// app.get("/login", (req: Request, res: Response) => {
//   res.redirect(`https://dev-7ipan33pvb7kewer.us.auth0.com/authorize?
//                 response_type=code&
//                 client_id=P9KMyGBq7ybtTkqVXNtWyuRI7lsWQYzr&
//                 redirect_uri=http://localhost:3000/callback`);
// });

// Ruta de callback de inicio de sesión
app.get("/callback", (req: Request, res: Response) => {
  // Aquí puedes manejar la respuesta de Auth0 después de iniciar sesión
  const { code } = req.query;
  // Realiza las llamadas necesarias a la API de Auth0 para obtener el token de acceso
  res.send("Inicio de sesión exitoso");
});

app.listen(PORT, () => {
  console.log(`Servidor Express en ejecución en el http://localhost:${PORT}`);
});
