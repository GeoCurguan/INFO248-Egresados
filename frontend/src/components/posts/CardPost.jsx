import Link from "next/link";
import Image from "next/image";
import React from "react";

const CardPost = ({ post }) => {
  const { id, title, body } = post;
  return (
    <Link href={`/intereses/${id}`} key={id}>
      <article className="flex sm:flex-row rounded-md shadow-md flex-col gap-6 mt-10 mx-10 px-5 py-10 bg-gray-200 cursor-pointer transition-all hover:bg-gray-300 ">
        <Image
          src="/placeholders/home-hero.jpg"
          alt="Image name"
          width={200}
          height={50}
          className="sm:max-w-md w-full rounded-sm "
        />
        <div className="flex flex-col">
          <h2 className="h-1/3 text-xl">{title}</h2>
          <p className="h-2/3 text-md">{body}</p>
        </div>
      </article>
    </Link>
  );
};

export default CardPost;
