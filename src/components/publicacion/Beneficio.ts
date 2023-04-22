import { PublicacionImpl } from "./PublicacionImpl"

export class Beneficio extends PublicacionImpl {
    private tipo: string;

    constructor(
        titulo: string,
        descripcion: string,
        fechaPublicacion: Date,
        tipo: string
    ) {
        super(titulo, descripcion, fechaPublicacion);
        this.tipo = tipo;
    }

    getTipo(): string {
        return this.tipo
    }
}