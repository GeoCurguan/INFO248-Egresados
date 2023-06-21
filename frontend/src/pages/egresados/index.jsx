import { useEffect, useState } from "react";
import FiltroEgresado from "@/components/egresados/FiltroEgresado";
import CardContent from "@/components/CardContent";
import SearchBar from "@/components/SearchBar";

const Index = () => {
  const [egresados, setEgresados] = useState([]);

  const [filtros, setFiltros] = useState({
    year: "2023",
    carrera: "Ingeniería en Completos",
  });

  useEffect(() => {
    fetch("api/egresados")
      .then((res) => res.json())
      .then((data) => setEgresados(data));
  }, []);

  useEffect(() => {
    console.log(filtros);
  }, [filtros]);

  return (
    <div className="w-10/12 mx-auto">
      <div className="flex flex-col items-end">
        <SearchBar />
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center mt-4 gap-4">
        <FiltroEgresado filtros={filtros} setFiltros={setFiltros} />
        <main
          className="
        md:w-3/4
        w-full h-[30rem] bg-gray-200 rounded-md shadow-lg p-4 overflow-auto bar"
        >
          {egresados.map((egresado) => (
            <CardContent
              key={egresado.id}
              tipo={"egresado"}
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
