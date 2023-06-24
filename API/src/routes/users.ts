import { Router } from "express";
import { getAllUsers } from "../controllers/users.controller";

const router: Router = Router();

// GET 1 USER BY ID
// GET ALL USERS: /api/users/
router.get("/", getAllUsers);

export default router;
