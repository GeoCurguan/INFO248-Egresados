// Import Nextjs
import Image from "next/image";

const Egresado = ({ nombreEmpresa, resumenTrabajo, tags }) => {
  return (
    <article className="flex flex-row justify-between items-center gap-4 p-4 bg-white rounded-lg shadow-md mb-4">
      <aside className="w-1/6 border border-gray-300 rounded-sm">
        <Image
          width={80}
          height={80}
          alt={`${nombreEmpresa} ${resumenTrabajo}` || "Trabajo UACH"}
          className="rounded-full mx-auto object-contain"
          src="/default-avatar.jpg"
        />
      </aside>
      <section className="w-5/6">
        <div className="flex flex-col">
          <p>{nombreEmpresa}</p>
          <p>{resumenTrabajo.slice(0, 80)}</p>
        </div>
        <p className="[&>span]:text-[--primary] [&>span:not(:last-child)]:after:content-['-']">
          {tags.map((tag) => (
            <span key={tag + Math.random()}> {tag} </span>
          ))}
        </p>
      </section>
    </article>
  );
};

export default Egresado;
