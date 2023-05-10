import { Publicacion } from "../publicacion/publicacion";
export class Usuario {
    constructor(
        public nombreUsuario: string,
        public contrasenia: string,
        public rol: string,
        public id: number,
        public publicaciones: Publicacion[]
    ) { }
    
    getNombreUsuario(): void { }
}
