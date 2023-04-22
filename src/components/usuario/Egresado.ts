import { Perfil } from "./Perfil"
import { OfertaLaboral } from "../publicacion/OfertaLaboral"

export class Egresado {
    private perfil: Perfil;
  
    public constructor(perfil: Perfil) {
      this.perfil = perfil;
    }
  
    public getPerfil(): Perfil {
      return this.perfil;
    }
  
    public publicarOfertaLaboral(oferta: OfertaLaboral): void {
      // Lógica para publicar una oferta laboral
    }
  }