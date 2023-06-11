import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const MyAuthContext = ({ children }) => {
  const authLS =
    typeof window !== "undefined" ? localStorage.getItem("token") || "" : "";
  const userLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user-data")) || {}
      : {};

  const [user, setUser] = useState(userLS);
  const [auth, setAuth] = useState(authLS);
  const [paginaLista, setPaginaLista] = useState(false);

  useEffect(() => {
    setPaginaLista(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("token", auth);
  }, [auth]);

  useEffect(() => {
    localStorage.setItem("user-data", JSON.stringify(user));
  }, [user]);

  const handleLogin = async (token) => {
    setAuth(token);
    localStorage.setItem("token", token);

    // Obtener los datos del usuario desde el servidor
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_URL_BACKEND + "/api/auth/profile",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "auth-token": token,
          },
        }
      );
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        localStorage.setItem("user-data", JSON.stringify(userData));
      } else {
        // Manejar el caso de error al obtener los datos del usuario
      }
    } catch (error) {
      // Manejar el error de la solicitud
    }
  };

  const handleLogout = () => {
    setAuth("");
    localStorage.removeItem("token");
    localStorage.removeItem("user-data");
  };

  return paginaLista ? (
    <AuthContext.Provider
      value={{
        auth,
        user,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  ) : null;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
