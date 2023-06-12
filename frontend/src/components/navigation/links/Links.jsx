import Link from "next/link";
import { useAuthContext } from "@/context/MyAuthContext";

const navLinks = [
  { name: "Intereses", href: "/intereses/" },
  { name: "Beneficios", href: "/beneficios/" },
  { name: "Empleos", href: "/empleos/" },
  { name: "Egresados", href: "/egresados/" },
  { name: "Personal", href: "/personal/" },
];
export const ButtonLogin = () => {
  return <button>{/* Icon 1 if !login */}login</button>;
};

export const ButtonLogout = () => {
  return <button>{/* Icon 2 if logut */}logout</button>;
};

const Links = () => {
  const { auth } = useAuthContext();
  console.log("auth from LINKS: ", auth);

  return (
    <nav>
      <ul className="md:flex-nowrap flex flex-wrap  justify-center gap-3 py-3 uppercase [&>li:not(last-child)>a]:bg-gray-200 [&>li:not(last-child)>a]:py-1 [&>li:not(last-child)>a]:px-5">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
        <li>
          {/* Icon 1 if !login */}
          <button></button>
          {/* {auth ? <ButtonLogout /> : <ButtonLogin />} */}
          {/* Icon 2 if logut */}
        </li>
      </ul>
    </nav>
  );
};

export default Links;
