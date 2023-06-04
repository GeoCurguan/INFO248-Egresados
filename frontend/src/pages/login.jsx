// Login conectado a localhost:4000/api/login
import { useState } from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "../context/MyAuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginMessage, setLoginMessage] = useState("");

  const { handleLogin } = useAuthContext();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones previas
    if (!username || !password) return;

    const res = await fetch(
      process.env.NEXT_PUBLIC_URL_BACKEND + "/api/auth/signin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email: username, password: password }),
        credentials: "include",
      }
    );

    if (res.ok) {
      const data = await res.json();
      const { _id } = data;
      console.log("Login success");
      console.log(_id);
      handleLogin(_id);
      router.push("/perfil");
    } else {
      setLoginMessage("Usuario Incorrecto o No Registrado");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full px-4"
      >
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <input
          type="text"
          placeholder="Username"
          className="border-2 border-gray-900 p-2 rounded-lg mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border-2 border-gray-900 p-2 rounded-lg mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {<>{loginMessage ? <span> {loginMessage}</span> : <></>}</>}

        <button type="submit" className="bg-gray-900 text-white p-2 rounded-lg">
          Login
        </button>
      </form>
      <button
        className="bg-gray-900 text-white p-2 rounded-lg"
        onClick={() => router.push("/perfil")}
      >
        Protected Ruta
      </button>
    </div>
  );
};

export default Login;
