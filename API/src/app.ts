import express, { Application } from "express";
import authRoutes from "./routes/auth";
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
  })
);
app.use(morgan("dev"));
app.use(express.json());

//Routes

app.use("/api/auth", authRoutes);

export default app;
