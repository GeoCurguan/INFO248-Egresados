import { Beneficio } from "./beneficio";

export class PostBeneficios {
    crearBeneficio(beneficio: Beneficio): void { };
    actualizarBeneficio(beneficio: Beneficio): void { };
    eliminarBeneficio(beneficio: Beneficio): void { };
    //deberia retornar una lista de beneficios
    listarBeneficios(): Array<Beneficio> {
        return []
     };
}