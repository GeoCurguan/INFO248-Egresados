const FiltroEmpleo = ({ filtros, setFiltros }) => {
  return (
    <aside
      className="
      md:w-1/4 md:h-[30rem]
      w-full h-auto bg-gray-200 rounded-lg shadow-lg p-4"
    >
      <p>Filtrado por:</p>
      <form>
        {/* Check */}
        <div className="flex flex-col items-center gap-2 [&>div>input]:w-4 [&>div>input]:h-3">
          <div className="w-full flex flex-row items-center gap-2">
            <input
              type="checkbox"
              name="practica-profesional"
              id="practica-profesional"
              checked={filtros.practicaProfesional}
              onChange={(e) =>
                setFiltros({
                  ...filtros,
                  practicaProfesional: e.target.checked,
                })
              }
            />
            <label htmlFor="practica-profesional">Práctica profesional</label>
          </div>
          <div className="w-full flex flex-row items-center gap-2">
            <input
              type="checkbox"
              name="trabajo-full"
              id="trabajo-full"
              checked={filtros.trabajoFull}
              onChange={(e) =>
                setFiltros({ ...filtros, trabajoFull: e.target.checked })
              }
            />
            <label htmlFor="trabajo-full">Trabajo full-time</label>
          </div>
        </div>
      </form>
    </aside>
  );
};

export default FiltroEmpleo;
