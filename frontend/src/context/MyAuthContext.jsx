import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const MyAuthContext = ({ children }) => {
  const authLS =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("access_token")
      : undefined;
  const [auth, setAuth] = useState(authLS || "");

  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    if (storedToken) {
      setAuth(storedToken);
    }
  }, []);

  const handleLogin = (token) => {
    setAuth(token);
    localStorage.setItem("access_token", token); // Almacena el token en el localStorage
    console.log("Login success from auth context");
  };

  const handleLogout = () => {
    setAuth("");
    localStorage.removeItem("access_token"); // Elimina el token del localStorage al hacer logout
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
