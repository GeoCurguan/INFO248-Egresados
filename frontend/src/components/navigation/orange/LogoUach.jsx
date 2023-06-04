import Image from "next/image";
import Link from "next/link";

const LogoUach = () => {
  return (
    <div className="md:col-span-1 col-span-2">
      <Link className="flex justify-end" href="#">
        <Image
          src="/icons/navbar/logo_uach.png"
          alt="Uach logo"
          width={65}
          height={65}
        />
      </Link>
    </div>
  );
};

export default LogoUach;
