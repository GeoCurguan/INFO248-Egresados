import { Publicacion } from "../publicacion/publicacion"

export class Noticia extends Publicacion {
    constructor(
        public autor: string,
        public fechaEvento: Date,
        id: number,
        titulo: string,
        descripcion: string,
        fechaPublicacion: Date
    ) {
        super(id, titulo, descripcion, fechaPublicacion);
    }
    getAutor(): string {
        return this.autor
    }
    getFechaEvento(): Date {
        return this.fechaEvento
    }
}