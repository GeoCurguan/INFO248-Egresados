import express from "express";
import crearDatabase from "../db/creardatabase";

const router = express.Router();

router.get("/", () => {
    crearDatabase;
    console.log("Base de datos creada")
});

export default router;