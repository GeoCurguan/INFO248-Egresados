import { PublicacionImpl } from "./PublicacionImpl"

export class OfertaLaboral extends PublicacionImpl {
    private empresa: string;
    private sueldo: number;
    private requisitos: string[];

    constructor(
        titulo: string,
        descripcion: string,
        fechaPublicacion: Date,
        empresa: string,
        sueldo: number,
        requisitos: string[]
    ) {
        super(titulo, descripcion, fechaPublicacion);
        this.empresa = empresa;
        this.sueldo = sueldo;
        this.requisitos = requisitos;
    }

    getEmpresa(): string {
        return this.empresa;
    }

    getSueldo(): number {
        return this.sueldo;
    }

    getRequisitos(): string[] {
        return this.requisitos;
    }
}