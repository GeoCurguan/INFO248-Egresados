// Ruta protegida,
// Valida [auth]

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthContext } from "../context/MyAuthContext";
import ProfileSummary from "@/components/profile/ProfileSummary";
import ProfileForm from "@/components/profile/ProfileForm";

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
      <div className="profileDataContainer">
        <ProfileSummary name={user.nombres} surname={user.apellidos} dni={user.rut} email={user.email} role={user.rol}/>
        <ProfileForm />
      </div>
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
