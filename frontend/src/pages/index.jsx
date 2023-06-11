import { useRouter } from "next/router";
import Hero from "../components/home/Hero";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <main className="flex flex-col items-center justify-between">
        <Hero />
      </main>
      <button
        className="bg-gray-900 text-white p-2 rounded-lg"
        onClick={() => router.push("/perfil")}
      >
        Perfil
      </button>
    </>
  );
}
