import ModalForm from "./ModalForm";

export const ModalEsqueleto = ({ children, setShowModal }) => {
  return (
    // Inicio de modal
    <div className="fixed z-20 inset-0 overflow-y-auto cursor-default">
      {/* Fondo modal */}
      <div className="flex items-center justify-center min-h-screen">
        {/* Contenido modal */}
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={() => setShowModal(false)}
        ></div>
        {children}
      </div>
    </div>
  );
};

export const Modal = ({ setShowModal }) => {
  return (
    // Inicio de modal
    <ModalEsqueleto setShowModal={setShowModal}>
      {/* Panel modal */}
      <div className="w-4/6 bg-white rounded-md shadow-xl z-30 mx-3 px-5 py-4">
        {/* Cabecera modal */}
        <div className="flex flex-row justify-between">
          <h3 className="text-lg font-medium text-gray-900">Agregar Empleo</h3>
          {/* Cerrar modal */}
          <ModalCierra setShowModal={setShowModal} />
        </div>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Llena los campos para agregar un nuevo empleo.
          </p>
        </div>
        <div className="mt-5">
          <ModalForm setShowModal={setShowModal} />
        </div>
      </div>
    </ModalEsqueleto>
  );
};

export const ModalCierra = ({ setShowModal }) => {
  return (
    <button
      className="text-gray-400 hover:text-gray-500"
      onClick={() => setShowModal(false)}
    >
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#000000"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>
  );
};
export default Modal;
