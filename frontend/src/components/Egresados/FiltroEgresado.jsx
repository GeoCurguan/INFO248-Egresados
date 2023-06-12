export const years = [
  { id: 10, year: "2023" },
  { id: 0, year: "2022" },
  { id: 1, year: "2021" },
  { id: 2, year: "2020" },
  { id: 3, year: "2019" },
  { id: 4, year: "2018" },
  { id: 5, year: "2017" },
  { id: 6, year: "2016" },
  { id: 7, year: "2015" },
  { id: 8, year: "2014" },
];

export const carreras = [
  { id: 2, carrera: "Ingeniería en Informática" },
  { id: 3, carrera: "Ingeniería en Electrónica" },
  { id: 5, carrera: "Ingeniería en Mecánica" },
  { id: 6, carrera: "Ingeniería en Completos" },
];

const FiltroEgresado = ({ filtros, setFiltros }) => {
  return (
    <aside
      className="
    md:w-1/4 md:h-[30rem]
    w-full h-auto bg-gray-200 rounded-lg shadow-lg p-4"
    >
      <p>Filtrado por:</p>
      <form>
        <label htmlFor="year">Año de egreso</label>
        <select
          name="year"
          id="year"
          value={filtros.year}
          onChange={(e) => setFiltros({ ...filtros, year: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {years.map((year) => (
            <option key={year.id}>{year.year}</option>
          ))}
        </select>
        <label htmlFor="carrera">Carrera</label>
        <select
          name="carrera"
          id="carrera"
          value={filtros.carrera}
          onChange={(e) => setFiltros({ ...filtros, carrera: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {carreras.map((carrera) => (
            <option key={carrera.id}>{carrera.carrera}</option>
          ))}
        </select>
      </form>
    </aside>
  );
};

export default FiltroEgresado;
