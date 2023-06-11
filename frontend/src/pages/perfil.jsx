// Ruta protegida,
// Valida [auth]

import { useAuthContext } from "../context/MyAuthContext";
import ProfileSummary from "@/components/profile/ProfileSummary";
import ProtectedLogged from "@/components/protected/ProtectedLogged";
import ProfileForm from "@/components/profile/ProfileForm";

const Ruta = () => {
  const { user, handleLogout } = useAuthContext();

  return (
    <ProtectedLogged>
      <div>
        <div className="profileDataContainer">
          <ProfileSummary
            name={user.nombres}
            surname={user.apellidos}
            dni={user.rut}
            email={user.email}
            role={user.rol}
          />
          <ProfileForm />
        </div>
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
