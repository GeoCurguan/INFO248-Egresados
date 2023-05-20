import { OfertaLaboral } from "./ofertalaboral";

/**
 * Interfaz que declara los métodos para postLaboral
 */
export interface postlaboral {
    crearOfertaLaboral(oferta: OfertaLaboral): void;
    actualizarOfertaLaboral(oferta: OfertaLaboral): void;
    eliminarOfertaLaboral(oferta: OfertaLaboral): void;
    listarOfertaLaboral(): Array<OfertaLaboral>;
}


export class PostLaboralImpl implements postlaboral {
    crearOfertaLaboral(oferta: OfertaLaboral): void {
        // Implementación de crearOfertaLaboral
    }

    actualizarOfertaLaboral(oferta: OfertaLaboral): void {
        // Implementación de actualizarOfertaLaboral
    }

    eliminarOfertaLaboral(oferta: OfertaLaboral): void {
        // Implementación de eliminarOfertaLaboral
    }

    listarOfertaLaboral(): Array<OfertaLaboral> {
        return [];
    }
}