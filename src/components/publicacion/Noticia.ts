import { PublicacionImpl } from "./PublicacionImpl"

export class Noticia extends PublicacionImpl {
    private autor: string;

    constructor(
        titulo: string,
        descripcion: string,
        fechaPublicacion: Date,
        autor: string
    ) {
        super(titulo, descripcion, fechaPublicacion);
        this.autor = autor;
    }

    getAutor(): string {
        return this.autor;
    }
}