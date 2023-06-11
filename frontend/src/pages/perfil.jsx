// Ruta protegida,
// Valida [auth]

import { useAuthContext } from "../context/MyAuthContext";
import ProfileSummary from "@/components/profile/ProfileSummary";
import ProtectedLogged from "@/components/protected/ProtectedLogged";

const Ruta = () => {
  const { user, handleLogout } = useAuthContext();

  return (
    <ProtectedLogged>
      <div>
        <ProfileSummary />
        <h1>Ruta protegida</h1>
        <h2>Hola {user.nombres}</h2>
        <button
          className="bg-gray-900 text-white p-2 rounded-lg"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </ProtectedLogged>
  );
};

export default Ruta;
