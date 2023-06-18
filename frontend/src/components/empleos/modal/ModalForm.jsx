const ModalForm = () => {
  return (
    <form>
      <div className="flex sm:flex-row flex-col justify-between sm:gap-4 gap-0 [&>div>input]:border [&>div>input]:mt-2 [&>div>input]:px-2">
        <div className="sm:w-1/2 w-full">
          <label
            htmlFor="nombreEmpresa"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre de la empresa
          </label>
          <input
            type="text"
            name="nombreEmpresa"
            id="nombreEmpresa"
            autoComplete="nombreEmpresa"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-sm sm:text-md border-gray-300 rounded-md"
          />
        </div>
        <div className="sm:w-1/2 w-full">
          <label
            htmlFor="resumenTrabajo"
            className="block text-sm font-medium text-gray-700"
          >
            Resumen del trabajo
          </label>
          <input
            type="text"
            name="resumenTrabajo"
            id="resumenTrabajo"
            autoComplete="resumenTrabajo"
            className="border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-sm sm:text-md border-gray-300 rounded-md"
          />
        </div>
      </div>
      {/* <div className="flex flex-row justify-between">
        <div className="w-1/2">
          <label
            htmlFor="fechaInicio"
            className="block text-sm font-medium text-gray-700"
          >
            Fecha de inicio
          </label>
          <input
            type="date"
            name="fechaInicio"
            id="fechaInicio"
            autoComplete="fechaInicio"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-sm sm:text-md border-gray-300 rounded-md"
          />
        </div>
      </div> */}
    </form>
  );
};

export default ModalForm;
