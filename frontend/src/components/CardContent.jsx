import Egresado from "./egresados/Egresado";
import Empleo from "./empleos/Empleo";

export default function CardContent({
  tipo,
  // Egresado
  egresado,
  // Empleo
  empleo,
}) {
  switch (tipo) {
    case "egresado":
      return <Egresado egresado={egresado} />;
    case "empleo":
      return <Empleo empleo={empleo} />;

    default:
      return (
        <div>
          <p>error</p>
        </div>
      );
  }
}
