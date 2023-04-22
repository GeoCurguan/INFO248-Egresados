import { Request, Response } from 'express';
import { Usuario } from '../models/usuario';
import { data } from '../db/usuario';

function buscarUsuario(username: string): Usuario | undefined {
  return data.usuarios.find((usuario: Usuario) => usuario.nombre === username);
}

function verificarDatos(username: string, password: string): boolean {
  const usuario = buscarUsuario(username);
  return usuario !== undefined && usuario.password === password;
}

export function login(req: Request, res: Response): void {
  const { username, password } = req.body;
  if (verificarDatos(username, password)) {
    res.status(200).json({ success: true, message: 'Login correcto' });
  } else {
    res.status(401).json({ success: false, message: 'Credenciales inválidas' });
  }
}