// Import Nextjs
import { useRouter } from "next/router";
import Head from "next/head";

// Import React
import { useState, useEffect } from "react";

export const PostHero = ({ post, id, loading }) => {
  return (
    <div
      className={`flex flex-col w-full justify-center items-center
        h-[450px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] gap-4
         bg-cover bg-center bg-no-repeat relative`}
      style={{
        backgroundImage: loading
          ? `url(/placeholders/placeholder_hero.svg)`
          : `url(https://picsum.photos/id/${id}/800/600)`,
      }}
    >
      <h1 className="text-3xl text-white font-bold text-center z-10 drop-shadow-md">
        {post.title}
      </h1>
      {/* general blur */}
      <div className="absolute inset-0 backdrop-blur-sm" />
      {/* gradiente en los ultimos 10 px */}
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[--bg-main] to-transparent" />
    </div>
  );
};

const Post = ({ post }) => {
  const router = useRouter();
  const { id } = router.query;
  const title_post = `Posts - ${id}`;

  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const img = new Image();
  //   img.src = `https://picsum.photos/id/${id}/800/600`;
  //   img.onload = () => {
  //     setLoading(false);
  //   };
  // }, []);

  return (
    <>
      <Head>
        <title>{title_post}</title>
      </Head>
      {/* {loading ? (
        <PostHero post={post} loading={loading} />
      ) : (
        <PostHero post={post} id={id} loading={loading} />
      )} */}

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <p>{post.body}</p>
        <p style={{ marginTop: "1rem" }}>
          El post fue sacado desde:{" "}
          <a
            className="link"
            // href={`https://jsonplaceholder.typicode.com/posts/${id}`}
          >
            {/* https://jsonplaceholder.typicode.com/posts/{id} */}
          </a>
        </p>
      </div>
    </>
  );
};

export default Post;

// Utilizamos getStaticProps para obtener los datos de la API
// En este caso, la información de un post en específico
// la cual es estática, por lo que no cambia
export async function getStaticProps({ params }) {
  const res = await fetch(
    // `https://jsonplaceholder.typicode.com/posts/${params.id}`
    `${process.env.NEXT_PUBLIC_URL_BACKEND}/api/posts/getPostById/${params.id}`
  );
  const post = await res.json();

  // Retorna el post que será utilizado por la página
  return { props: { post } };
}

// También utilizamos getStaticPaths para obtener los paths
// de los posts, para que NextJS pueda generar las páginas
// estáticas de cada post
export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL_BACKEND}/api/posts/getPostByType/Noticia`
  );
  const { posts } = await res.json();
  console.log(posts);
  // Obtenemos los paths de los posts
  const paths = posts.map((post) => ({
    params: { id: post._id.toString() },
  }));

  // Retorna los paths, y fallback: false para que
  // NextJS no genere páginas dinámicas

  // Por ejemplo, si no existe el post con id 1000
  // no se generará una página para ese post
  return { paths, fallback: false };
}
