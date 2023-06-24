import User, { IUser } from "../models/User";
import { Request, Response } from "express";
import { Error as MongooseError } from "mongoose";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    // Obtenemos todos los usuarios cuyo "rol === 'Egresado'"
    const users = await User.find({ rol: "Egresado" });
    // Como los usuarios tienen informacion sensible, no queremos que se muestre en la respuesta
    // por lo que vamos a crear un nuevo arreglo de usuarios que no tenga la informacion sensible
    // y lo vamos a regresar en la respuesta

    const usersPublicData = users.map((user: IUser) => {
      return {
        _id: user._id,
        nombres: user.nombres,
        apellidos: user.apellidos,
        rut: user.rut,
        descripcion: user.descripcion,
        email: user.email,
        foto: user.foto,
        region: user.region,
        linkedin: user.linkedin,
      };
    });

    res.status(200).json(usersPublicData);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ocurrió un error al obtener los usuarios",
    });
  }
};

// GET 1 USER BY ID: /api/users/:id
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "No se encontró el usuario",
      });
    }

    const userPublicData = {
      _id: user._id,
      nombres: user.nombres,
      apellidos: user.apellidos,
      rut: user.rut,
      descripcion: user.descripcion,
      email: user.email,
      foto: user.foto,
      region: user.region,
      linkedin: user.linkedin,
    };

    res.status(200).json(userPublicData);
  } catch (error: MongooseError | any) {
    // Si no lo encuentra, regresa un error 404
    if (error instanceof MongooseError.CastError) {
      return res.status(404).json({
        success: false,
        message: "No se encontró el usuario",
      });
    }
    // Si ocurre un error en el servidor, regresa un error 500
    res.status(500).json({
      success: false,
      message: "Ocurrió un error al obtener el usuario",
    });
  }
};
