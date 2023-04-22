export class Perfil {
  private nombre: string;
  private correo: string;
  private telefono: string;
  private carrera: string;
  private anioEgreso: number;

  public constructor(nombre: string, correo: string, telefono: string, carrera: string, anioEgreso: number) {
    this.nombre = nombre;
    this.correo = correo;
    this.telefono = telefono;
    this.carrera = carrera;
    this.anioEgreso = anioEgreso;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getCorreo(): string {
    return this.correo;
  }

  public getTelefono(): string {
    return this.telefono;
  }

  public getCarrera(): string {
    return this.carrera;
  }

  public getAnioEgreso(): number {
    return this.anioEgreso;
  }
}
