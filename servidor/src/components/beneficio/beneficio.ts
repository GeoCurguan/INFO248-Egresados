import { Publicacion } from "../publicacion/publicacion";
export class Beneficio extends Publicacion {
    constructor(
        public tipo: string,
        id: number,
        titulo: string,
        descripcion: string,
        fechaPublicacion: Date
    ) {
        super(id, titulo, descripcion, fechaPublicacion);
    };
    getTipo(): string {
        return this.tipo
    };
}