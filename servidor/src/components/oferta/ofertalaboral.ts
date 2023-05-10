import { Publicacion } from "../publicacion/publicacion";
export class OfertaLaboral extends Publicacion {
    constructor(
        public empresa: string,
        public sueldo: number,
        public requisitos: object, // deberia ser una lista de string
        id: number,
        titulo: string,
        descripcion: string,
        fechaPublicacion: Date
    ) {
        super(id, titulo, descripcion, fechaPublicacion);
    };
    getEmpresa(): string {
        return this.empresa
    };
    getSueldo(): number {
        return this.sueldo
    };
    getRequisitos(): object {
        return this.requisitos
    };
}