import Image from "next/image";
import Link from "next/link";

const Egresado = ({ egresado }) => {
  // { _id, nombres, apellidos, rut, descripcion, email, region, linkedin, foto }
  const { nombres, apellidos, email, descripcion, foto, region, linkedin } =
    egresado;

  return (
    <article className="flex flex-row justify-between items-center gap-4 p-4 bg-white rounded-lg shadow-md mb-4">
      <aside className="w-1/6 border border-gray-300 rounded-sm">
        <Image
          width={80}
          height={80}
          alt={`${nombres} ${apellidos}` || "Egresado UACH"}
          className="rounded-full mx-auto object-contain"
          src={foto || "/default-avatar.jpg"}
        />
      </aside>
      <section className="w-5/6">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <p className="w-full sm:w-2/3">
              {nombres} {apellidos}
            </p>
            <p className="w-full sm:w-1/3 text-gray-400 break-words">
              Región <span>{region || ":("}</span>
            </p>
          </div>
          <p className="text-sm">{descripcion || "No tengo nada que decir."}</p>
        </div>
        <div className="flex gap-2 items-center">
          {linkedin ? (
            <Link href={linkedin}>
              <Image
                className="cursor-pointer"
                width={20}
                height={20}
                alt={`${nombres} ${apellidos} linkedin`}
                src="/icons/social_media/icons8-linkedin.svg"
              />
            </Link>
          ) : (
            <Image
              width={20}
              height={20}
              alt={`${nombres} ${apellidos} linkedin`}
              src="/icons/social_media/icons8-linkedin.svg"
            />
          )}

          <span className="text-[--primary]">{email}</span>
        </div>
      </section>
    </article>
  );
};

export default Egresado;
