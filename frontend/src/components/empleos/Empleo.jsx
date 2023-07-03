// Import Nextjs
import Image from "next/image";

// Import utils
import { formatCurrency } from "@/utils";

const Egresado = ({ empleo }) => {
  const { _id, author, title, image, date, body, type } = empleo;

  const remuneracion = "20000";

  return (
    <article className="flex flex-row justify-between items-center gap-4 p-4 bg-white rounded-lg shadow-md mb-4">
      <aside className="w-1/6 border border-gray-300 rounded-sm">
        <Image
          width={80}
          height={80}
          alt={`${author} ${title}` || "Trabajo UACH"}
          className="rounded-full mx-auto object-contain"
          src={image || "/default-avatar.jpg"}
        />
      </aside>
      <section className="w-5/6">
        <div className="flex flex-col">
          {/* Titulo */}
          <p>{title}</p>
          {/* Container  */}
          <div className="flex justify-between">
            {/* Autor && fecha  */}
            <div className="flex justify-between flex-col">
              <p className="text-xs text-gray-400">
                Publicado por:
                <span className="inline-block w-2 h-2 rounded-full bg-gray-400 ml-1 mr-1"></span>
                <span>{author}</span>
              </p>
              <span className="text-xs text-gray-400">
                <time dateTime={date}>
                  {new Date(date).toLocaleDateString("es-MX", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </span>
            </div>
            {/* Remuneración  */}
            <aside>
              <p className="text-xs text-gray-400">Remuneración: </p>
              {remuneracion ? (
                <>
                  <span className="inline-block w-2 h-2 rounded-full bg-gray-400 ml-1 mr-1"></span>
                  <span>{formatCurrency(remuneracion)}</span>
                </>
              ) : (
                <>
                  <span className="inline-block w-2 h-2 rounded-full bg-gray-400 ml-1 mr-1"></span>
                  <span>Por definir</span>
                </>
              )}
            </aside>
          </div>
          {/* Body content */}
          <p className="mt-2">{body.slice(0, 80)}</p>
        </div>
      </section>
    </article>
  );
};

export default Egresado;
