import Image from "next/image";
import React from "react";
import nothumbnail from "../public/thumbnail-placeholder.png";
import Link from "next/link";

interface PostProps {
  id: string;
  author: string;
  date: string;
  thumbnail?: string;
  authorEmail?: string;
  title: string;
  content: string;
  links?: string[];
  category?: string;
}

export default function Post({
  id,
  author,
  date,
  thumbnail,
  authorEmail,
  title,
  content,
  links,
  category,
}: PostProps) {
  return (
    <div>
      <div>
        {" "}
        Posted by: <span className="font-bold "> {author} </span> on {date}
      </div>
      <div className="w-full h-72 relative">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover rounded-md object-center"
          />
        ) : (
          <Image
            src={nothumbnail}
            alt={title}
            fill
            className="object-cover rounded-md object-center"
          />
        )}{" "}
      </div>

      {category && <Link href={`categories/${category}`}>{category} </Link>}

      <h2>{title} </h2>
      <p>{content} </p>
      {links && (
        <div>
          {" "}
          {links.map((link, i) => (
            <div key={i}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
              <Link href={link}>{link} </Link>{" "}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
