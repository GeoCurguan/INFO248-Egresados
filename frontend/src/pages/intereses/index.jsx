import { useRouter } from "next/router";
import Hero from "@/components/HeroContent";

export default function Home() {
  const router = useRouter();
  const heroContent = {
    bg: "/placeholders/placeholder_hero.svg",
    icon: "/icons/hero/noticias.svg",
    title: "Noticias",
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
    </>
  );
}
