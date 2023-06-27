// Import Nextjs
import { useRouter } from "next/router";
import Image from "next/image";
// Import React
import Hero from "@/components/HeroContent";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const heroContent = {
    bg: "/placeholders/placeholder_hero.svg",
    icon: "/icons/hero/beneficios.svg",
    title: "Beneficios",
  };

  return (
    <>
      <main className="flex flex-col items-center justify-between">
        <Hero
          bg={heroContent.bg}
          icon={heroContent.icon}
          title={heroContent.title}
        />
      </main>
      <div className="block pt-20"></div>
      <Link href="#">
        <article
          className="flex sm:flex-row rounded-md shadow-md flex-col gap-6 mt-10 mx-10 px-5 py-10 bg-gray-200
        cursor-pointer transition-all hover:bg-gray-300 "
        >
          <Image
            src="/images/home/home-hero.jpg"
            alt="Image name"
            width={200}
            height={50}
            className="sm:max-w-md w-full rounded-sm "
          />
          <div className="flex flex-col">
            <h2 className="h-1/3 text-xl">Titulo</h2>
            <p className="h-2/3 text-md">
              Slice .200 Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Veniam enim consequatur explicabo illum doloremque quidem
              aperiam natus? Cum accusamus veniam sint molestiae magni quisquam
              a! Placeat commodi adipisci repellendus ducimus.
            </p>
          </div>
        </article>
      </Link>
      <p>ss</p>
    </>
  );
}
