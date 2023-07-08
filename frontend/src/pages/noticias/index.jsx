// Import Nextjs
import { useRouter } from "next/router";
// Import React
import { useState, useEffect } from "react";
// Import Components
import Hero from "@/components/HeroContent";
import Posts from "@/components/posts/Posts";

export const heroContent = {
  bg: "/portada.jpg",
  icon: "/icons/hero/noticias.svg",
  title: "Noticias",
};

export default function Home() {
  const router = useRouter();
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const getNoticias = async () => {
      // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const res = await fetch(
        // http://localhost:4000/api/posts/getPostByType/intereses
        `${process.env.NEXT_PUBLIC_URL_BACKEND}/api/posts/getPostByType/noticia`
      );
      const { posts } = await res.json();
      const news = posts;

      console.log(news);
      setNoticias(news);
    };
    getNoticias();
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
      <Posts path={"/noticias/"} posts={noticias} />
    </>
  );
}
