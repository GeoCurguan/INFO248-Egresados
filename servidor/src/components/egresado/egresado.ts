import { Perfil } from "../perfil/perfil";

export class Egresado {
    constructor(public perfil: Perfil) { }

    obtenerPerfil(): Perfil {
        return this.perfil
    };
};