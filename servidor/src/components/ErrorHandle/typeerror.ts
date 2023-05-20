import { errorHandle } from "./errorhandle";

class typeError implements errorHandle{
    manejarError(Error: string): void{
        console.log("Recibe error y lo manera, lo recibe como string, ya que podría ser un 404, etc")
    }
}