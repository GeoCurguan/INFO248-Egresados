import Link from "next/link";
import Image from "next/image";
import React from "react";

const CardPost = ({ path, post }) => {
  const { _id, title, body, image } = post;
  console.log("img: ", image);
  return (
    <Link href={`${path}${_id}`} key={_id} className="block mt-10 mx-10 ">
      <article className="flex sm:max-h-80 sm:flex-row rounded-md shadow-md flex-col gap-6 px-5 py-10 bg-gray-200 cursor-pointer transition-all hover:bg-gray-300 ">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={200}
            height={50}
            className="sm:max-w-md sm:w-auto w-full max-w-full rounded-sm "
          />
        ) : (
          <Image
            src="/placeholders/placeholder_hero.svg"
            alt={title}
            width={200}
            height={50}
            className="sm:max-w-md sm:w-auto w-full max-w-full rounded-sm"
            priority
          />
        )}
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
