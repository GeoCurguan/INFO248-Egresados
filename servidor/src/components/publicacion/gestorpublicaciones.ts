import { Publicacion } from "./publicacion";

export class GestorPublicacions {
    constructor(
        private bufferPublicacion: Publicacion
    ) { }
    crearPublicacion(): void { };
    cargarPublicacion(pk_id: number): void { };
    obtenerPublicacion(): void { };
    actualizarPublicacion(): void { };
    enviarPublicacion(): void { };
    verificarPublicacion(): void { };
}