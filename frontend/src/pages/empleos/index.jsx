// Import React
import { useEffect, useState } from "react";
// Import Components
import FiltroEmpleo from "@/components/empleos/FiltroEmpleo";
import AgregarEmpleo from "@/components/empleos/AgregarEmpleo";
import SearchBar from "@/components/SearchBar";
import CardContent from "@/components/CardContent";

export default function Index() {
  const [empleos, setEmpleos] = useState([]);
  const [filtros, setFiltros] = useState({
    practicaProfesional: false,
    trabajoFull: false,
  });

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_URL_BACKEND}/api/posts/getPostByType/oferta_laboral`
    )
      .then((res) => res.json())
      .then((data) => setEmpleos(data.posts));
  }, []);

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
          {empleos.map((empleo) => (
            <CardContent key={empleo._id} tipo={"empleo"} empleo={empleo} />
          ))}
        </main>
      </div>
    </div>
  );
}
