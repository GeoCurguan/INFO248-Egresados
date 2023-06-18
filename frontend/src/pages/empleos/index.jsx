import { useEffect, useState } from "react";
import FiltroEmpleo from "@/components/empleos/FiltroEmpleo";
import AgregarEmpleo from "@/components/empleos/AgregarEmpleo";
import SearchBar from "@/components/SearchBar";
import CardContent from "@/components/CardContent";

const fakeData = [
  {
    id: 1,
    nombreEmpresa: "Empresa 1",
    resumenTrabajo:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus saepe ratione est officiis ut modi sunt, cumque recusandae quidem accusamus accusantium tempore expedita nisi perspiciatis velit at nam dolor eos.",
    tags: ["React", "Next", "Tailwind"],
  },
  {
    id: 2,
    nombreEmpresa: "Empresa 2",
    resumenTrabajo: "lorem",
    tags: ["React", "Next", "Bootstrap"],
  },
  {
    id: 3,
    nombreEmpresa: "Empresa 3",
    resumenTrabajo: "lorem ipsum",
    tags: ["Java", "Spring", "Hibernate"],
  },
  {
    id: 4,
    nombreEmpresa: "Completos 4",
    resumenTrabajo: "Tienes que hacer completos",
    tags: ["Completos", "Completos", "Completos"],
  },
];

const Index = () => {
  const [filtros, setFiltros] = useState({
    practicaProfesional: false,
    trabajoFull: false,
  });

  useEffect(() => {
    console.log(filtros);
  }, [filtros]);

  return (
    <div className="w-10/12 mx-auto">
      <div className="flex flex-row justify-between items-center">
        <AgregarEmpleo />
        <SearchBar />
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center mt-4 gap-4">
        <FiltroEmpleo filtros={filtros} setFiltros={setFiltros} />
        <main
          className="
        md:w-3/4
        w-full h-[30rem] bg-gray-200 rounded-md shadow-lg p-4 overflow-auto bar"
        >
          {fakeData.map((empleo) => (
            <CardContent
              key={empleo.id}
              tipo={"empleo"}
              nombreEmpresa={empleo.nombreEmpresa}
              resumenTrabajo={empleo.resumenTrabajo}
              tags={empleo.tags}
            />
          ))}
        </main>
      </div>
    </div>
  );
};

export default Index;
