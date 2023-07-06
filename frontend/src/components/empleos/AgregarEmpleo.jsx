// Import React
import { useState } from "react";
// Import Components
import Modal from "@/components/empleos/modal/Modal";
import { useAuthContext } from "@/context/MyAuthContext";

export default function AgregarEmpleo() {
  const [showModal, setShowModal] = useState(false);

  const { auth } = useAuthContext();
  if (!auth) return <div></div>;

  return (
    <>
      <button
        className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Agregar empleo
      </button>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </>
  );
}
