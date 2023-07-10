import { Request, Response } from "express";
import Post, { IPost} from '../models/Post';
//import Post, {INewsPost, IPost} from '../models/Post';
import NewsPost, {INewsPost, NewsPostModel} from "../models/newsPost";
import User, {IUser} from '../models/User';
// import { JobOfferPostModel, NewsPostModel, BenefitsPostModel } from "../models/Post"; // Importar los modelos específicos
import BenefitPosts, { BenefitsPostModel, IBenefitsPost } from "../models/BenefitPosts";
import JobOfferPosts ,{IJobOfferPost, JobOfferPostModel}from "../models/JobOfferPosts";
/**
 * Crea un post de acuerdo a el tipo de publicación, dsp la devuelve si la puede hacer.
 * @param req {body con los parametros de entrada indicados en el readme}
 * @param res
 * @returns Devuelve si la publicacion fue creada o no, tambien devuelve la publicación como json
 */
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
        salary: req.body.salary,
        company: req.body.company,
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
        res.status(500).json({
            success: false,
            message: 'Ocurrió un error al crear el post',
        });
    }
};

/**
 * Consigue los post de todas las tablas en la db
 * @param req 
 * @param res 
 */
export const getAllPosts = async (req: Request, res: Response) => {
    try {
      const posts: IPost[] = await Post.find();
      const news: INewsPost[] = await NewsPost.find();
      const benefits: IBenefitsPost[] = await BenefitPosts.find();
      const jobPost: IJobOfferPost[] = await JobOfferPosts.find();
      res.status(200).json({
        success: true,
        posts: posts,news,benefits,jobPost
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

        const typePost = req.body.type; 
        const postId = req.params.postId;
        const deletedPost = "";

        
        if (req.body.type === "oferta_laboral") {

          const deletedPost: IJobOfferPost | null = await JobOfferPosts.findByIdAndDelete(postId);
          if (deletedPost) {
            res.status(200).json({
              success: true,
              message: 'Post eliminado exitosamente',
            });
          }
          else{
            res.status(404).json({
              success: false,
              message: 'Post no encontrado',
            });
          }  
        } else if (req.body.type === "noticia") {

          const deletedPost: INewsPost | null = await NewsPost.findByIdAndDelete(postId);
          if (deletedPost) {
            res.status(200).json({
              success: true,
              message: 'Post eliminado exitosamente',
            });
          }else{
            res.status(404).json({
              success: false,
              message: 'Post no encontrado',
            });
          } 
        } else if (req.body.type === "beneficio") {

          const deletedPost: IBenefitsPost | null = await BenefitPosts.findByIdAndDelete(postId);
          if (deletedPost) {
            res.status(200).json({
              success: true,
              message: 'Post eliminado exitosamente',
            });
          }else{
            res.status(404).json({
              success: false,
              message: 'Post no encontrado',
            });
          } 
        } else {

          const deletedPost: IPost | null = await Post.findByIdAndDelete(postId);
          if (deletedPost) {
            res.status(200).json({
              success: true,
              message: 'Post eliminado exitosamente',
            });
          } 
          else{
            res.status(404).json({
              success: false,
              message: 'Post no encontrado',
            });
          } 
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

    const typePost = req.body.type;
    const postId = req.params.postId;

    if (req.body.type === "oferta_laboral") {

      const post = await JobOfferPosts.findById(postId);
      if(!post){
        res.status(404).json({
          success: false,
          message: 'Post no encontrado'
        })
      }else{
        res.status(200).json(post);
      }
      
    } else if (req.body.type === "noticia") {

      const post = await NewsPost.findById(postId);
      if(!post){
        res.status(404).json({
          success: false,
          message: 'Post no encontrado'
        })
      }else{
        res.status(200).json(post);
      }
      
    } else if (req.body.type === "beneficio") {

      const post = await BenefitPosts.findById(postId);
      if(!post){
        res.status(404).json({
          success: false,
          message: 'Post no encontrado'
        })
      }else{
        res.status(200).json(post);
      }
      
    } else {

      const post = await Post.findById(postId);
      if(!post){
        res.status(404).json({
          success: false,
          message: 'Post no encontrado'
        })
      }else{
        res.status(200).json(post);
      }
    }

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener el post'
    });
  }
};

export const getPostByType = async (req: Request, res: Response) => {
  try {

    const typePost = req.params.postType;
    if (typePost== "oferta_laboral"){
      
      const posts: IJobOfferPost[] = await JobOfferPosts.find();
      res.status(200).json({
        success: true,
        posts: posts
      });

    }
    else if(typePost== "noticia"){
      const posts: INewsPost[] = await NewsPost.find();
      res.status(200).json({
        success: true,
        posts: posts
      });

    }
    else if (typePost== "beneficio"){
      const posts: IBenefitsPost[] = await BenefitPosts.find();

      res.status(200).json({
        success: true,
        posts: posts
      });
    }else{

      const posts: IPost[] = await Post.find();
      res.status(200).json({
        success: true,
        posts: posts
      });

    }
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener los posts'
    });
  }
};