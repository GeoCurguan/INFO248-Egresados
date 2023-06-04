import Image from "next/image";

const NavContact = () => {
  return (
    <div className="bg-[--nav-contact] text-white">
      {/* Icono Telefono y "Contacto" */}
      <div className="grid grid-cols-10 py-1">
        <div className="md:col-span-2 col-span-3 flex justify-center items-center gap-2">
          <Image
            src="/icons/navbar/contact_phone.png"
            alt="Contact phone icon"
            width={18}
            height={18}
          />
          <p className="text-[--nav-contact-text]">Contacto</p>
        </div>
      </div>
    </div>
  );
};

export default NavContact;
