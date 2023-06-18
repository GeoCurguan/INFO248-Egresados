import express, { Application } from "express";
import authRoutes from "./routes/auth";
import postsRoutes from "./routes/posts";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app: Application = express();

//Settings
app.set("port", process.env.PORT_BACKEND || 5000);

//Middleware
app.use(
  cors({
    origin: process.env.URL_FRONTEND || "http://localhost:3000",
    credentials: true, // Agrega esta lsínea paras permitir el envío de credencssiales
    exposedHeaders: ["auth-token"], // Agrega esta línea para permitir el encabezado
  })
);
app.use(morgan("dev"));
app.use(express.json());

//Routes

app.use("/api/auth", authRoutes);
app.use("/api/posts", postsRoutes);

export default app;
