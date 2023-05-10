export class Publicacion {
    constructor(
        public id: number,
        public titulo: string,
        public descripcion: string,
        public fechaPublicacion: Date,
    ) { }
    getTitulo(): string {
        return this.titulo
    }
    getDescripcion(): string {
        return this.descripcion
    }
    getFechaPublicacion(): Date {
        return this.fechaPublicacion
    }
}