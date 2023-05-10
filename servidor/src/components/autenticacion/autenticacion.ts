import { Usuario } from "../usuario/usuario";

export class Autenticacion {

    constructor(
        private username: string,
        private contrasenia: string,
        public usuario: Usuario,
    ) {
        username = this.usuario.nombreUsuario;
        contrasenia = this.usuario.contrasenia;
     };

    autenticar(username: string, contrasenia: string): boolean {
        return true
    };
    cerrarSesion(): void { };
}