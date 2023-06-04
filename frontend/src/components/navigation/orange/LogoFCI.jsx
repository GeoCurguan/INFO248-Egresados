import Link from "next/link";
import Image from "next/image";

const LogoFCI = () => {
  return (
    <div className="lg:col-span-5 lg:block hidden ">
      <Link className="flex justify-center" href="#">
        <Image
          src="/icons/navbar/logo_fci.png"
          alt="Factulad Ciencias de la Ingeniería logo"
          width={300}
          height={100}
        />
      </Link>
    </div>
  );
};

export default LogoFCI;
