import { useState } from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "../context/MyAuthContext";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [rut, setRut] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const router = useRouter();

  const [isUserRegisterMsg, setIsUserRegisterMsg] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      process.env.NEXT_PUBLIC_URL_BACKEND + "/api/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nombres: name,
          apellidos: lastName,
          rut: rut,
          email: email,
          password: password,
          rol: role,
        }),
        credentials: "include",
      }
    );
    if (res.ok) {
      setIsUserRegisterMsg(
        "Usuario Creado Correctamente... Redireccionando al login"
      );
      await new Promise((resolve) => setTimeout(resolve, 3000));
      router.push("/login");
    } else {
      setIsUserRegisterMsg("Usuario Ingresado Ya Existe");
      console.log("Usuario ya existe");
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full px-4"
      >
        <input
          type="text"
          placeholder="Nombre"
          className="border-2 border-gray-900 p-2 rounded-lg mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellido"
          className="border-2 border-gray-900 p-2 rounded-lg mb-4"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Rut"
          className="border-2 border-gray-900 p-2 rounded-lg mb-4"
          value={rut}
          onChange={(e) => setRut(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          className="border-2 border-gray-900 p-2 rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="border-2 border-gray-900 p-2 rounded-lg mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          type="select"
          className="border-2 border-gray-900 p-2 w-48 rounded-lg mb-4"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option defaultValue={""}>Escoja Rol</option>
          <option value="Egresado">Egresado</option>
          <option value="Invitado">Invitado</option>
        </select>
        {isUserRegisterMsg ? <span>{isUserRegisterMsg}</span> : <></>}
        <button type="submit" className="bg-gray-900 text-white p-2 rounded-lg">
          Crear Cuenta
        </button>
      </form>
    </>
  );
};
export default Register;
