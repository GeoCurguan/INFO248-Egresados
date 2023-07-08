// Import Nextjs
import { useRouter } from "next/router";
import Head from "next/head";

// Import React
import { useState, useEffect } from "react";

export const PostHero = ({ post, loading }) => {
  return (
    <div
      className={`flex flex-col w-full justify-center items-center
        h-[450px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] gap-4
         bg-cover bg-center bg-no-repeat relative`}
      style={{
        backgroundImage: loading
          ? `url(/placeholders/placeholder_hero.svg)`
          : `url(${post.image})`,
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
  const [loading, setLoading] = useState(true);
  // Data to display
  const { author, body, date, id_user, image, title, type } = post || {};

  // Preload image
  useEffect(() => {
    if (!image) return;
    const img = new Image();
    img.src = `${image}`;
    img.onload = () => {
      setLoading(false);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{title_post}</title>
      </Head>
      {post && <PostHero post={post} loading={loading} />}

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div>
          <span className="text-sm text-gray-500">{author}</span>
          <span className="text-sm text-gray-500 mx-2">|</span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <hr className="my-2" />
        <p className="text-sm text-gray-500">{type}</p>
        <p>{body}</p>
      </div>
    </>
  );
};

export default Post;

export async function getStaticProps({ params }) {
  // Hacemos un fetch a la url con un body {type: "noticia"}
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL_BACKEND}/api/posts/getPostById/${params.id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: "noticia" }),
    }
  );

  const post = await res.json();
  return { props: { post } };
}

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL_BACKEND}/api/posts/getPostByType/noticia`
  );
  const { posts } = await res.json();
  const paths = posts.map((post) => ({
    params: { id: post._id.toString() },
  }));

  return { paths, fallback: false };
}
