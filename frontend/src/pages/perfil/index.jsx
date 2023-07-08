// Ruta protegida,
// Valida [auth]

import { useAuthContext } from "@/context/MyAuthContext";
import ProfileSummary from "@/components/perfil/ProfileSummary";
import ProtectedLogged from "@/components/protected/ProtectedLogged";
import ProfileForm from "@/components/perfil/ProfileForm";
import PostForm from "@/components/perfil/PostForm";

const Ruta = () => {
  const { user, handleLogout } = useAuthContext();
  console.log("user from perfil/index.jsx: ", user);

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
          <ProfileForm userId={user._id} />
          <PostForm
            name={user.nombres + " " + user.apellidos}
            userId={user._id}
          />
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
