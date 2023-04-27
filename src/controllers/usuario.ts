import { Request, Response } from "express";
import { Usuario } from "../models/usuario";
import { data } from "../db/usuario";

// 1 Usuario:  GET /:id
export function getUsuario(req: Request, res: Response): void {
  const { id } = req.params;
  const usuario = data.usuarios.find((usuario: Usuario) => usuario.id === id);

  // Si existe el usuario, devolvemos id y nombre
  if (usuario) {
    const { id, nombre } = usuario;
    const response = { id, nombre };
    res.status(200).json(response);
  } else {
    res.status(404).json({ success: false, message: "Usuario no encontrado" });
  }
}

// Todos los Usuarios: GET /
export function getUsuarios(req: Request, res: Response): void {
  const usuarios = data.usuarios.map((usuario: Usuario) => {
    const { id, nombre } = usuario;
    return { id, nombre };
  });

  res.status(200).json(usuarios);
}

// LOGIN
function buscarUsuario(username: string): Usuario | undefined {
  return data.usuarios.find((usuario: Usuario) => usuario.nombre === username);
}

function verificarDatos(username: string, password: string): boolean {
  const usuario = buscarUsuario(username);
  return usuario !== undefined && usuario.password === password;
}

export function login(req: Request, res: Response): void {
  const { username, password } = req.body;

  console.log(req.body);

  if (verificarDatos(username, password)) {
    res.status(200).json({ success: true, message: "Login correcto" });
  } else {
    res.status(401).json({ success: false, message: "Credenciales inválidas" });
  }
}
