import Image from "next/image";

const Egresado = ({ nombres, apellidos, caracteristicas, dominios }) => {
  return (
    <article className="flex flex-row justify-between items-center gap-4 p-4 bg-white rounded-lg shadow-md mb-4">
      <aside className="w-1/6 border border-gray-300 rounded-sm">
        <Image
          width={80}
          height={80}
          alt={`${nombres} ${apellidos}` || "Egresado UACH"}
          className="rounded-full mx-auto object-contain"
          src="/default-avatar.jpg"
        />
      </aside>
      <section className="w-5/6">
        <div className="flex flex-col">
          <p>
            {nombres} {apellidos}
          </p>
          <p>{caracteristicas}</p>
        </div>
        <p>
          <span className="text-[--primary]">{dominios}</span>
        </p>
      </section>
    </article>
  );
};

export default Egresado;
