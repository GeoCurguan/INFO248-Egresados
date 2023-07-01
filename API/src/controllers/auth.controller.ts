import { Request, Response } from "express";
import User, {IUser} from '../models/User';
// import Post, {IPost} from '../models/Post';
import jwt from 'jsonwebtoken';

export const signup = async (req: Request, res: Response) =>{
    const emailvalidation = await User.findOne({email: req.body.email});
    if(emailvalidation) return res.status(400).json('Ya existe un usuario');
    //Guardando nuevo usuario
    const user: IUser = new User({
        email: req.body.email,
        password: req.body.password,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        rut: req.body.rut,
        rol: req.body.rol

    });

    user.password = await user.encryptPassword(user.password);
    //console.log(user);s
    const savedUser = await user.save(); //Metodo asincrono

    ///CREANDO TOKENs

    const token:string = jwt.sign({_id: savedUser._id}, process.env.TOKEN_SECRET || "tokentest");   //El segundo parametro es el token

    res.header('auth-token',token).json(savedUser);
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


//Recibe el auth-token en el profile
export const profile = async (req: Request, res: Response) =>{
    const user = await User.findById(req.userId, {password : 0});
    if(!user) return res.status(404).json('No User Found');
    res.json(user);

};

export const logout = (req: Request, res: Response) => {
    res.removeHeader('auth-token');
    res.json({ message: 'Logged out successfully' });
  };

//Por ahora solo responde con el perfil completo

export const editProfile = async (req: Request, res: Response) => {
    try {
        const updatedFields: any = {};
        if(req.body.password){
            updatedFields.password = req.body.password;
        }
        if(req.body.telefono){
            updatedFields.telefono = req.body.telefono;
        }
        if(req.body.descripcion){
            updatedFields.descripcion = req.body.descripcion;
        }
        if(req.body.foto){
            updatedFields.foto = req.body.foto;
        }
        if(req.body.pais){
            updatedFields.pais = req.body.pais;
        }
        if(req.body.region){
            updatedFields.region = req.body.region;
        }
        if(req.body.comuna){
            updatedFields.comuna = req.body.comuna;
        }
        if(req.body.direccion){
            updatedFields.direccion = req.body.direccion;
        }
        if(req.body.instagram){
            updatedFields.instagram = req.body.instagram;
        }
        if(req.body.twitter){
            updatedFields.twitter = req.body.twitter;
        }
        if(req.body.facebook){
            updatedFields.facebook = req.body.facebook;
        }
        if(req.body.linkedin){
            updatedFields.linkedin = req.body.linkedin;
        }

    const updatedUser: IUser | null = await User.findByIdAndUpdate(
        req.params.userId,
        updatedFields,
        { new: true }
    );

    if (!updatedUser) {
        return res.status(404).json("No User Found");
    }

    return res.json(updatedUser);
    } catch (error) {
        return res.status(500).json("Internal Server Error");
    }
};