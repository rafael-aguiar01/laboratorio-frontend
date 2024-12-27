import React, { FC } from "react";
import PostCardMeta from "@/components/PostCardMeta/PostCardMeta";
import { PostDataType } from "@/data/types";
import Link from "next/link";
import Image from "next/image";
import { UrlObject } from 'url';


export interface Card3SmallProps {
  className?: string;
  post: any;
}

const Card3Small: FC<Card3SmallProps> = ({ className = "h-full", post }) => {
  const { title, slug, featureImg } = post;

    let href = `archive/${slug}`
    const formattedHref: UrlObject = {
      pathname: href.startsWith('/') ? href : `/${href}`,
    };

  return (
    <div
      className={`nc-Card3Small relative flex flex-row justify-between items-center ${className}`}
    >
      <Link href={formattedHref} className="absolute inset-0" title={title}></Link>
      <div className="relative space-y-2">
        <PostCardMeta meta={{ ...post }} />
        <h2 className="nc-card-title block text-sm sm:text-base font-medium sm:font-semibold text-neutral-900 dark:text-neutral-100">
          <Link href={formattedHref} className="line-clamp-2" title={title}>
            {title}
          </Link>
        </h2>
      </div>

      <Link
        href={formattedHref}
        title={title}
        className={`block w-20 flex-shrink-0 relative rounded-lg overflow-hidden z-0 ms-4 group`}
      >
        <div className={`w-full h-0 aspect-w-1 aspect-h-1`}>
          <Image
            alt="featured"
            sizes="100px"
            className="object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300"
            src={featureImg}
            fill
            title={title}
          />
        </div>
      </Link>
    </div>
  );
};

export default Card3Small;
