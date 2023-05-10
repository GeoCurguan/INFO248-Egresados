import { Publicacion } from "../publicacion/publicacion"
export class Evento extends Publicacion {
    constructor(
        public Autor: string,
        id: number,
        titulo: string,
        descripcion: string,
        fechaPublicacion: Date
    ) {
        super(id, titulo, descripcion, fechaPublicacion);
    }
    getAutor(): string {
        return this.Autor
    }
}
