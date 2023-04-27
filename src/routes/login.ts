import express from "express";
import { login } from "../controllers/usuario";

const router = express.Router();

router.get("/", (req, res) => {
  // Respuesta para verificar que la ruta existe
  res.status(200).json({ success: true, message: "Ruta de login" });
});

router.post("/", login);

export default router;
