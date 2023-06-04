import { useState } from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "../context/MyAuthContext";

const Register = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isUserRegisterMsg, setIsUserRegisterMsg] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:3000/api/auth/signup", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                },
                body: JSON.stringify({ username: username, email: email, password: password }),
                credentials: "include",
            });
            if(res.ok){
                console.log("Usuario creado correctamente")
            }else{
                console.log("Usuario existe y no se puede jajaja usuario")
        }
    }
    return(
        <>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center w-full px-4"
            >
            <input
                type="text"
                placeholder="Usuario"
                className="border-2 border-gray-900 p-2 rounded-lg mb-4"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            {
                isUserRegisterMsg ? <span>{isUserRegisterMsg}</span> : <></>
            }
            <button type="submit" className="bg-gray-900 text-white p-2 rounded-lg">
                Crear Cuenta
            </button>
            </form>
        </>
    );
};
export default Register;