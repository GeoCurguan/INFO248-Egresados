import { Router } from "express";
import { getAllUsers, getUserById } from "../controllers/users.controller";

const router: Router = Router();

// GET 1 USER BY ID
// GET ALL USERS: /api/users/
router.get("/", getAllUsers);
router.get("/:id", getUserById);

export default router;
