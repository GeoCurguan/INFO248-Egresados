import { Request, Response } from "express";
import { data } from "../db/usuario";
import { Post, PostModel } from "../models/post";

// 1 Post: GET /api/post
export const getPost = (req: Request, res: Response): void => {
  const { id } = req.params;

  if (id) {
    const usuario = data.usuarios.find((usuario) => usuario.id === id);
    if (usuario) {
      const posts = usuario.posts.map((post) => {
        return new PostModel(post);
      });

      res.status(200).json(posts);
    } else {
      res
        .status(404)
        .json({ success: false, message: "Usuario no encontrado" });
    }
  }
};

// GET /api/posts

export const getPosts = (req: Request, res: Response): void => {
  const posts: Post[] = [];

  data.usuarios.forEach((usuario) => {
    usuario.posts.forEach((post) => {
      posts.push(new PostModel(post));
    });
  });

  res.status(200).json(posts);
};
