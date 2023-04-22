import { OfertaLaboral } from "../publicacion/OfertaLaboral";

export class Usuario {
  private nombreUsuario: string;
    private contraseña: string;
    private rol: string;

    public constructor(nombreUsuario: string, contraseña: string, rol: string) {
    this.nombreUsuario = nombreUsuario;
      this.contraseña = contraseña;
      this.rol = rol;
}

    public publicarOfertaLaboral(oferta: OfertaLaboral): void {
      // Lógica para publicar una oferta laboral
}

    public getNombreUsuario(): string {
      return this.nombreUsuario;
  }
}
