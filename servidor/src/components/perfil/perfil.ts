export class Perfil {
    // las propiedades estaticas dejarlas aqui
    // static anioIngreso: number = 2019;
    // no es posible ingresarlo como parametro
    constructor(
        // anioIngreso: number = 2019,
        // private xd: string,
        public nombre: string,
        public correo: string,
        public telefono: string,
        public carrera: string,
        public anioEgreso: number
        // public anioEgreso?: number // ? indica opcional
    ) { }

    getNombre(): string {
        return this.nombre
    };
    getCorreo(): string {
        return this.correo
    };
    getTelefono(): string {
        return this.telefono
    };
    getCarrera(): string {
        return this.carrera
    };
    getAnioEgreso(): number {
        return this.anioEgreso
    };
};
