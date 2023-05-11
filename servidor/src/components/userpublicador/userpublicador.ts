import { Noticia } from "../noticia/noticia"
import { Beneficio } from "../beneficio/beneficio"
import { Usuario } from "../usuario/usuario"

export class UserPublicador extends Usuario {
    constructor(
        nombreUsuario: string,
        contrasenia: string,
        rol: string,
        id: number,
        publicaciones: []
    ) {
        super(nombreUsuario, contrasenia, rol, id, publicaciones);
    };
    publicarNoticia(noticia: Noticia): void { };
    eliminarNoticia(noticia: Noticia): void { };
    publicarBeneficio(beneficio: Beneficio): void { };
    eliminarBeneficio(beneficio: Beneficio): void { };
}