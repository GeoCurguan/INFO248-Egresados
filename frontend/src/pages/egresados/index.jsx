import { useEffect, useState } from "react";
import Egresado from "@/components/Egresados/Egresado";
import FiltroEgresado from "@/components/Egresados/FiltroEgresado";
import SearchBar from "@/components/Egresados/SearchBar";

const fakeData = [
  {
    id: 1,
    nombres: "Juan",
    apellidos: "Perez",
    caracteristicas: "lorem",
    dominios: "ipsum",
  },
  {
    id: 2,
    nombres: "Juan",
    apellidos: "Perez",
    caracteristicas: "lorem",
    dominios: "ipsum",
  },
  {
    id: 3,
    nombres: "Ricardo",
    apellidos: "Fuentes",
    caracteristicas: "lorem",
    dominios: "ipsum",
  },
  {
    id: 4,
    nombres: "Juan",
    apellidos: "Perez",
    caracteristicas: "lorem",
    dominios: "ipsum",
  },
];

const Index = () => {
  const [filtros, setFiltros] = useState({
    year: "2023",
    carrera: "Ingeniería en Completos",
  });

  useEffect(() => {
    console.log(filtros);
  }, [filtros]);

  return (
    <div className="w-10/12 mx-auto">
      <SearchBar />
      <div className="flex md:flex-row flex-col justify-between items-center mt-4 gap-4">
        <FiltroEgresado filtros={filtros} setFiltros={setFiltros} />
        <main
          className="
        md:w-3/4
        w-full h-[30rem] bg-gray-200 rounded-md shadow-lg p-4 overflow-auto bar"
        >
          {fakeData.map((egresado) => (
            <Egresado
              key={egresado.id}
              nombres={egresado.nombres}
              apellidos={egresado.apellidos}
              caracteristicas={egresado.caracteristicas}
              dominios={egresado.dominios}
            />
          ))}
        </main>
      </div>
    </div>
  );
};

export default Index;
