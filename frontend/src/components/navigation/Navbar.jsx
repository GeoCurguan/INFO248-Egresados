import Contact from "@/components/navigation/contact/Contact";
import LogoUach from "./orange/LogoUach";
import LogoFCI from "./orange/LogoFCI";

const Navbar = () => {
  return (
    <>
      <Contact />
      <nav className="navbar navbar-expand-lg navbar-light bg-[--nav-bg]">
        <div className="grid grid-cols-10 py-4 items-center">
          {/* Logo Uach 1/10 */}
          <LogoUach />
          {/* Egresados Facultad de Ciencias de la Ingeniería 4/10*/}
          <div className="md:col-span-4 col-span-7 flex items-center text-white ml-3 mb-3">
            <p>Egresados Facultad de Ciencias de la Ingeniería</p>
          </div>
          {/* Logo FCIUach 5/10*/}
          <LogoFCI />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
