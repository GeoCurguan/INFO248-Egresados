import { Request, Response } from "express";
import User, {IUser} from '../models/User';
import jwt from 'jsonwebtoken';

export const signup = async (req: Request, res: Response) =>{
    const emailvalidation = await User.findOne({email: req.body.email});
    if(emailvalidation) return res.status(400).json('Ya existe un usuario');
    //Guardando nuevo usuario
    const user: IUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    user.password = await user.encryptPassword(user.password);
    //console.log(user);s
    const savedUser = await user.save(); //Metodo asincrono

    ///CREANDO TOKEN

    const token:string = jwt.sign({_id: savedUser._id}, process.env.TOKEN_SECRET || "tokentest");   //El segundo parametro es el token

    res.header('auth-token',token).json(savedUser); //s
};
export const signin = async (req: Request, res: Response) =>{

    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).json('Email or password is wrong');
    const correctPassword:boolean = await user.validatePassword(req.body.password);
    if(!correctPassword) return res.status(400).json('Password incorrect');

    const token: string = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET || "tokentest",{
        expiresIn: 60*60*24  //Expira en 24 horas
    })

    res.header('auth-token',token).json(user);

};

//isusercreated se puede renombrar y darle otra funcionalidad, lo dejo para copiar la forma de agregar más "endpoints" y funcionalidades
export const isusercreated = async (req: Request, res: Response) =>{
    const user = await User.findOne({email: req.body.email});
    console.log(user);
    if (user){
        return res.status(400).json('User Exist');
    }
}

export const profile = async (req: Request, res: Response) =>{
    const user = await User.findById(req.userId, {password : 0});
    if(!user) return res.status(404).json('No User Found');
    res.json(user);

};

export const logout = (req: Request, res: Response) => {
    res.removeHeader('auth-token');
    res.json({ message: 'Logged out successfully' });
  };