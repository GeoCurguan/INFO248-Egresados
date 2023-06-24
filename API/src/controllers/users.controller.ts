import User, { IUser } from "../models/User";
import { Request, Response } from "express";

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
