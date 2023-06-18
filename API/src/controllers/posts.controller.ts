import { Request, Response } from "express";
import Post, {IPost} from '../models/Post';
import User, {IUser} from '../models/User';

export const createPost = async (req: Request, res: Response) => {
    try{
    const user = await User.findById(req.params.userId);
    if(!user) return res.status(404).json('Usuario no Encontrado');

    const newPostData: IPost = new Post({
        author: req.body.author,
        title: req.body.title,
        date: req.body.date,
        body: req.body.body,
        type: req.body.type,
    });

    const newPost = await newPostData.save();

    user.posts.push(newPost._id);
    await user.save();

    res.status(201).json({
        success: true,
        message: 'Post creado exitosamente',
        post: newPost,
    });
    }catch(error){
        res.status(500).json({
            success: false,
            message: 'Ocurrió un error al crear el post',
        });
    }
};