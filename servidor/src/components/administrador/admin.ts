import { UserPublicador } from "../userpublicador/userpublicador"
export class Admin extends UserPublicador {
    constructor(
        public nombre: string,
        nombreUsuario: string,
        contrasenia: string,
        rol: string,
        id: number,
        publicaciones: []
    ) {
        super(nombreUsuario, contrasenia, rol, id, publicaciones);
    };;
    getNombre() {
        return this.nombre
    };
};