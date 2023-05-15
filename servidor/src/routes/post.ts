import express from "express";
import {
  getPost,
  getPosts,
  // createPost,
  // updatePost,
  // deletePost,
} from "../controllers/post";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);

export default router;
