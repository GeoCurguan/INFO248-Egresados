import { data } from "../db/usuario";
import { Post } from "./post";

export interface Usuario {
  id: string;
  nombre: string;
  password: string;
  post?: Post[];
}

export class UsuarioModel {
  static find(username: string, password: string): Usuario | undefined {
    const usuarioEncontrado = data.usuarios.find(
      (usuario: Usuario) =>
        usuario.nombre === username && usuario.password === password
    );

    return usuarioEncontrado;
  }
}
