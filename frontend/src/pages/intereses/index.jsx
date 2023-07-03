// Import Nextjs
import { useRouter } from "next/router";
// Import React
import { useState, useEffect } from "react";
// Import Components
import Hero from "@/components/HeroContent";
import Posts from "@/components/posts/Posts";

export const heroContent = {
  bg: "/placeholders/placeholder_hero.svg",
  icon: "/icons/hero/noticias.svg",
  title: "Noticias",
};

export default function Home() {
  const router = useRouter();
  const [intereses, setIntereses] = useState([]);

  useEffect(() => {
    const getIntereses = async () => {
      // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const res = await fetch(
        // http://localhost:4000/api/posts/getPostByType/intereses
        `${process.env.NEXT_PUBLIC_URL_BACKEND}/api/posts/getPostByType/noticia`
      );
      const { posts } = await res.json();
      const newIntereses = posts;

      console.log(newIntereses);
      setIntereses(newIntereses);
    };
    getIntereses();
  }, []);

  return (
    <>
      <main className="flex flex-col items-center justify-between">
        <Hero
          bg={heroContent.bg}
          icon={heroContent.icon}
          title={heroContent.title}
        />
      </main>
      <Posts posts={intereses} />
    </>
  );
}
