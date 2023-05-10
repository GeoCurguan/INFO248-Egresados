import { Evento } from "./evento";

export class posteventos {
    crearEvento(evento: Evento): void { };
    actualizarEvento(evento: Evento): void { };
    eliminarEvento(evento: Evento): void { };
    //retorna lista
    listarEventos(): Array<Evento> {
        return []
     };
}