import { useState } from "react";
import Modal from "@/components/empleos/modal/Modal";
import { useAuthContext } from "@/context/MyAuthContext";

export default function AgregarEmpleo() {
  const [showModal, setShowModal] = useState(false);

  const { auth } = useAuthContext();
  if (!auth) return <div></div>;

  return (
    <>
      <button type="button" onClick={() => setShowModal(true)}>
        Agregar empleo
      </button>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </>
  );
}
