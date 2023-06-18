import { PasswordController} from '../libs/PasswordController';
import {Schema, model, Document, Types} from 'mongoose';
import postSchema, {IPost} from './Post';
import bcrypt from 'bcryptjs';


export interface IUser extends Document {
    rut: string;
    email: string;
    password: string;
    rol: string;
    nombres: string |null;
    apellidos: string | null;
    telefono: string | null;
    descripcion: string | null;
    foto: string | null;
    pais: string | null;
    region: string | null;
    comuna: string | null;
    direccion: string | null;
    instagram: string | null;
    twitter: string | null;
    facebook: string | null;
    linkedin: string | null;

    posts: Types.ObjectId[];
    encryptPassword(password: string): Promise<string>;
    validatePassword(password: string): Promise<boolean>;
}

// export enum Rol {
// 	Admin = "Admin",
// 	Secretaria = "Secretaria",
// 	Invitado = "Invitado",
// 	Egresado = "Egresado"
// }


const userSchema = new Schema({
    nombres:{
        type:String,
        default: null
    },
    apellidos: {
        type: String,
        default: null
    },
    rut:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        //default: "Egresado",
        required: true
    },
    telefono: {
        type: String,
        maxlength: 255,
        default: null,
    },
    descripcion: {
        type: String,
        maxlength: 255,
        default: null,
    },
    foto: {
        type: String,
        maxlength: 255,
        default: null,
    },
    pais: {
        type: String,
        maxlength: 255,
        default: null,
    },
    region: {
        type: String,
        maxlength: 255,
        default: null,
    },
    comuna: {
        type: String,
        maxlength: 255,
        default: null,
    },
    direccion: {
        type: String,
        maxlength: 255,
        default: null,
    },
    instagram: {
        type: String,
        maxlength: 255,
        default: null,
    },
    twitter: {
        type: String,
        maxlength: 255,
        default: null,
    },
    facebook: {
        type: String,
        maxlength: 255,
        default: null,
    },
    linkedin: {
        type: String,
        maxlength: 255,
        default: null,
    },

    posts: [{type: Types.ObjectId, ref: 'Post'}],
});

userSchema.methods.encryptPassword = async (password: string): Promise<string> => {
    return PasswordController.encryptPassword(password);
};

userSchema.methods.validatePassword = async function (password:string): Promise<boolean> {
    return PasswordController.validatePassword(password, this.password);
}


export default model<IUser>('User', userSchema);