import { data } from "../db/usuario"

export interface Usuario {
  id: string;
  nombre: string;
  password: string;
}

export class UsuarioModel {
  static find(username: string, password: string): Usuario | undefined {
    const usuarioEncontrado = data.usuarios.find(
      (usuario: Usuario) => usuario.nombre === username && usuario.password === password
    );
    return usuarioEncontrado;
  }
}
