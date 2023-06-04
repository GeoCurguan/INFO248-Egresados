// Ruta protegida,
// Valida [auth]

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthContext } from "../context/MyAuthContext";

const Ruta = () => {
  const { auth, handleLogout } = useAuthContext();
  const router = useRouter();

  console.log(auth);

  useEffect(() => {
    if (!auth) {
      router.push("/login");
    }
  }, [auth]);

  if (!auth) return null;

  return (
    <div>
      <h1>Ruta protegida</h1>
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
