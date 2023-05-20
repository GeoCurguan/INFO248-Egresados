import { Beneficio } from "../beneficio/beneficio";
import { Evento } from "../evento/evento";
import { Noticia } from "../noticia/noticia";
import { OfertaLaboral } from "../oferta/ofertalaboral";
import { Usuario } from "../usuario/usuario";

export interface dataBase{
    makeUserQuery(query: string): Usuario;
    makeNoticia(query: string): Noticia;
    makeEvento(query: string): Evento;
    makeBeneficio(query: string): Beneficio;
    makeOferta(query: string): OfertaLaboral;

}