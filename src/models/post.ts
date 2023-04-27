export interface Post {
  id: string;
  titulo: string;
  contenido: string;
  publicado: boolean;
  publishedAt?: Date;
  tipo?: "Oferta" | "Noticia" | "Beneficio";
}

export class PostModel implements Post {
  public id: string;
  public titulo: string;
  public contenido: string;
  public publicado: boolean;
  public publishedAt?: Date;
  public tipo?: "Oferta" | "Noticia" | "Beneficio";

  constructor(attributes: Post) {
    this.id = attributes.id;
    this.titulo = attributes.titulo;
    this.contenido = attributes.contenido;
    this.publicado = attributes.publicado;
    this.publishedAt = attributes.publishedAt;
    this.tipo = attributes.tipo;
  }
}
