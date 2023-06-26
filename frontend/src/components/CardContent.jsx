import Image from "next/image";

import Egresado from "./egresados/Egresado";
import Empleo from "./empleos/Empleo";

export default function CardContent({
  tipo,
  // Egresado
  egresado,
  // Empleo
  nombreEmpresa,
  resumenTrabajo,
  tags,
}) {
  switch (tipo) {
    case "egresado":
      return <Egresado egresado={egresado} />;
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
