import { Noticia } from "./noticia";

export interface PostNoticia {

    crearNoticia(noticia: Noticia): void;
    actualizarNoticia(noticia: Noticia): void;
    eliminarNoticia(noticia: Noticia): void;
    listarNoticias(): Array<Noticia>;
};
