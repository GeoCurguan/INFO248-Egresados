import Image from "next/image";

import Egresado from "./egresados/Egresado";
import Empleo from "./empleos/Empleo";

export default function CardContent({
  tipo,
  // Egresado
  nombres,
  apellidos,
  caracteristicas,
  dominios,
  // Empleo
  nombreEmpresa,
  resumenTrabajo,
  tags,
}) {
  switch (tipo) {
    case "egresado":
      return (
        <Egresado
          nombres={nombres}
          apellidos={apellidos}
          caracteristicas={caracteristicas}
          dominios={dominios}
        />
      );
    case "empleo":
      return (
        <Empleo
          nombreEmpresa={nombreEmpresa}
          resumenTrabajo={resumenTrabajo}
          tags={tags}
        />
      );

    default:
      return (
        <div>
          <p>error</p>
        </div>
      );
  }
}
