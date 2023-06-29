import { Request, Response } from "express";
import Post, {IPost} from '../models/Post';
import User, {IUser} from '../models/User';

export const createPost = async (req: Request, res: Response) => {
    try{
        const user = await User.findById(req.params.userId);
        if(!user) return res.status(404).json('Debes estar logueado con un usuario valido para crear un POST');
        

    const newPostData: IPost = new Post({
        id_user: user._id,
        author: req.body.author,
        title: req.body.title,
        image: req.body.image,
        date: req.body.date,
        body: req.body.body,
        type: req.body.type,
    });

    const savedPost = await newPostData.save();


    res.status(201).json({
        success: true,
        message: 'Post creado exitosamente',
        post: newPostData
    });
    }catch(error){
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