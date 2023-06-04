import express, { Application } from "express";
import authRoutes from "./routes/auth";
import morgan from "morgan";
import cors from "cors";

const app: Application = express();

//Settings
app.set("port", 3000);

//Middleware
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true, // Agrega esta lsínea paras permitir el envío de credenciales
  })
);
app.use(morgan("dev"));
app.use(express.json());

//Routes

app.use("/api/auth", authRoutes);

export default app;
