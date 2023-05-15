import express from "express";
import { getUsuario, getUsuarios } from "../controllers/usuario";
import { getPost } from "../controllers/post";

const router = express.Router();

router.get("/", getUsuarios);
router.get("/:id", getUsuario);
router.get("/:id/posts", getPost);

export default router;
