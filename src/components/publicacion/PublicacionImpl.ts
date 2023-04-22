import { OfertaLaboral } from "./OfertaLaboral";
import { PostNoticias } from "./PostNoticias"
import { VerEgresados } from "../VerEgresados"
import { Noticia } from "./Noticia"
import { Beneficio } from "./Beneficio"

interface Publicacion {
    getTitulo(): string;
    getDescripcion(): string;
    getFechaPublicacion(): Date;
}

export abstract class PublicacionImpl implements Publicacion {
    protected titulo: string;
    protected descripcion: string;
    protected fechaPublicacion: Date;
    
    constructor(titulo: string, descripcion: string, fechaPublicacion: Date) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechaPublicacion = fechaPublicacion;
    }
    
    getTitulo(): string {
        return this.titulo;
    }
    
    getDescripcion(): string {
        return this.descripcion;
    }
    
    getFechaPublicacion(): Date {
        return this.fechaPublicacion;
    }
}

PostNoticias;
VerEgresados;
OfertaLaboral;
Noticia;
Beneficio;
