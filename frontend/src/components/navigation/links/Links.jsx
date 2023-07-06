import Link from "next/link";
import { useAuthContext } from "@/context/MyAuthContext";

const navLinks = [
  { name: "🏠", href: "/" },
  { name: "Noticias", href: "/noticias/" },
  { name: "Beneficios", href: "/beneficios/" },
  { name: "Empleos", href: "/empleos/" },
  { name: "Egresados", href: "/egresados/" },
  { name: "Personal", href: "/perfil/" },
];
export const ButtonLogin = () => {
  return (
    <Link
      className="block bg-blue-700 hover:bg-blue-800 text-white py-1 px-2 rounded"
      href={"/login"}
    >
      login
    </Link>
  );
};

export const ButtonLogout = ({ handleLogout }) => {
  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
    >
      logout
    </button>
  );
};

const Links = () => {
  const { auth, handleLogout } = useAuthContext();
  console.log("auth from LINKS: ", auth);

  return (
    <nav>
      <ul className="md:flex-nowrap flex flex-wrap justify-center gap-3 py-3 uppercase hover:[&>li:not(:last-child)>a]:bg-gray-300 [&>li:not(:last-child)>a]:bg-gray-200 [&>li:not(:last-child)>a]:py-1 [&>li:not(:last-child)>a]:px-5">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link className="block" href={link.href}>
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          {/* Icon 1 if !login */}
          {auth ? (
            <ButtonLogout handleLogout={handleLogout} />
          ) : (
            <ButtonLogin />
          )}
          {/* Icon 2 if logut */}
        </li>
      </ul>
    </nav>
  );
};

export default Links;
