// Import Nextjs
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

// Import Components
import ProtectedLogged from "@/components/protected/ProtectedLogged";
import ProfileSummary from "@/components/perfil/ProfileSummary";

export default function PerfilId({ perfil }) {
  const router = useRouter();
  const { id } = router.query;
  const title_perfil = `Perfil - ${perfil.nombres}`;

  return (
    <ProtectedLogged>
      <Head>
        <title>{title_perfil}</title>
      </Head>
      <div className="max-w-full flex flex-col justify-center items-center">
        {/* <h1>Perfil id: {id}</h1>
          <h2>{perfil.nombres}</h2>
          <p>{perfil.apellidos}</p>
          <p>{perfil.rut}</p>
          <p>{perfil.region}</p>
          <p>{perfil.correo}</p> */}
        <div className="flex justify-center">
          <ProfileSummary
            name={perfil.nombres}
            surname={perfil.apellidos}
            dni={perfil.rut}
            email={perfil.email}
          />
        </div>
        <p className="mt-20">
          El perfil fue sacado desde:{" "}
          <Link
            className="break-all"
            href={`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/users/${id}`}
          >
            process.env.NEXT_PUBLIC_URL_BACKEND/api/users/{id}
          </Link>
        </p>
      </div>
    </ProtectedLogged>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL_BACKEND}/api/users/${params.id}`
  );
  const perfil = await res.json();
  return { props: { perfil } };
}

// export async function getStaticPaths() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/users`);
//   const perfiles = await res.json();
//   const paths = perfiles.map((perfil) => ({
//     params: { id: perfil._id.toString() },
//   }));
//   return { paths, fallback: false };
// }
