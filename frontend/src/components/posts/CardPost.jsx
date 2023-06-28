import Link from "next/link";
import Image from "next/image";
import React from "react";

const CardPost = ({ post }) => {
  const { id, title, body } = post;
  return (
    <Link href={`/intereses/${id}`} key={id}>
      <article className="flex sm:max-h-80 sm:flex-row rounded-md shadow-md flex-col gap-6 mt-10 mx-10 px-5 py-10 bg-gray-200 cursor-pointer transition-all hover:bg-gray-300 ">
        <Image
          src="/images/home/home-hero.jpg"
          alt="Image name"
          width={200}
          height={50}
          className="sm:max-w-md sm:w-auto w-full max-w-full rounded-sm "
        />
        <div className="overflow-hidden">
          <h2 className="h-1/3 text-xl overflow-ellipsis whitespace-nowrap overflow-hidden">
            {title}
          </h2>
          <p className="h-2/3 text-md overflow-y-auto">{body}</p>
        </div>
      </article>
    </Link>
  );
};

export default CardPost;
