import { Request, Response } from "express";
import Post, {IPost} from '../models/Post';
import User, {IUser} from '../models/User';
import { JobOfferPostModel, NewsPostModel, BenefitsPostModel } from "../models/Post"; // Importar los modelos específicos


export const createPost = async (req: Request, res: Response) => {
    try{
        const user = await User.findById(req.params.userId);
        if(!user) return res.status(404).json('Debes estar logueado con un usuario valido para crear un POST');
        let newPostData: IPost;

    // Verificar el tipo de publicación y crear la instancia correspondiente
    if (req.body.type === "oferta_laboral") {
      const jobOfferData = {
        id_user: user._id,
        author: req.body.author,
        title: req.body.title,
        image: req.body.image,
        date: req.body.date,
        body: req.body.body,
        type: req.body.type,
        sueldo: req.body.sueldo,
        empresa: req.body.empresa,
      };
      newPostData = new JobOfferPostModel(jobOfferData);
    } else if (req.body.type === "noticia") {
      const newsData = {
        id_user: user._id,
        author: req.body.author,
        title: req.body.title,
        image: req.body.image,
        date: req.body.date,
        body: req.body.body,
        type: req.body.type,
        source: req.body.source,
      };
      newPostData = new NewsPostModel(newsData);
    } else if (req.body.type === "beneficio") {
      const benefitsData = {
        id_user: user._id,
        author: req.body.author,
        title: req.body.title,
        image: req.body.image,
        date: req.body.date,
        body: req.body.body,
        type: req.body.type,
        category: req.body.category,
      };
      newPostData = new BenefitsPostModel(benefitsData);
    } else {
      // Si el tipo de publicación no coincide con ninguna clase específica, utilizar la clase base
      newPostData = new Post({
        id_user: user._id,
        author: req.body.author,
        title: req.body.title,
        image: req.body.image,
        date: req.body.date,
        body: req.body.body,
        type: req.body.type,
      });
    }

    const savedPost = await newPostData.save();
    if (!savedPost) {
      console.log("Error al Publicar un post");
    }
    res.status(201).json({
        success: true,
        message: 'Post creado exitosamente',
        post: newPostData
    });
    }catch(error){
      console.log(error);
        res.status(500).json({
            success: false,
            message: 'Ocurrió un error al crear el post',
        });
    }
};


export const getAllPosts = async (req: Request, res: Response) => {
    try {
      const posts: IPost[] = await Post.find();
      res.status(200).json({
        success: true,
        posts: posts
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener los posts'
      });
    }
  };


export const deletePost = async (req: Request, res:Response) =>{
    try {
        const postId = req.params.postId;
        const deletedPost: IPost | null = await Post.findByIdAndDelete(postId);

        if (deletedPost) {
          res.status(200).json({
            success: true,
            message: 'Post eliminado exitosamente',
          });
        } else {
          res.status(404).json({
            success: false,
            message: 'Post no encontrado',
          });
        }
      } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Error al eliminar el post',
        });
    }
};


export const getPostById = async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId;
    const post = await Post.findById(postId)

    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener el post'
    });
  }
};

export const getPostByType = async (req: Request, res: Response) => {
  console.log("XD")
  try {
    const typePost = req.params.postType;
    const posts: IPost[] = await Post.find( {type: typePost} );
    res.status(200).json({
      success: true,
      posts: posts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener los posts'
    });
  }
};