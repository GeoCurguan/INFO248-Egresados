import { Perfil } from "../perfil/perfil";

export class GestorPerfiles {
    // aca se cargaria el perfil del egresado?
    constructor(private bufferPerfil: Perfil) { }
    
    cargarPerfil(fk_id: number): void {}
    actualizarPerfil(): void {}
    enviarPerfil(): void {}
    verificarPerfil(): void {}
}