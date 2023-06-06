// Ruta protegida,
// Valida [auth]

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthContext } from "../context/MyAuthContext";

const Ruta = () => {
  const { auth, user, handleLogout } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!auth) {
      router.push("/login");
    }
  }, [auth]);

  if (!auth) return null;

  console.log("from Perfil:", user);
  return (
    <div>
      <h1>Ruta protegida</h1>
      <h2>Hola {user.nombres}</h2>
      <button
        className="bg-gray-900 text-white p-2 rounded-lg"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Ruta;
