import { Evento } from "../evento/evento";

export interface tieneAutor {
    getAutor(evento: Evento): void;
}