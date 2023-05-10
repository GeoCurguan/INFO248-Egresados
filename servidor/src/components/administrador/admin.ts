import { UserPublicador } from "../userpublicador/userpublicador"
export class Admin extends UserPublicador {
    constructor(
        public nombre: string,
        nombreUsuario: string,
        contrasenia: string,
        rol: string,
        id: number
    ) {
        super(nombreUsuario, contrasenia, rol, id);
    };
    getNombre() {
        return this.nombre
    };
};