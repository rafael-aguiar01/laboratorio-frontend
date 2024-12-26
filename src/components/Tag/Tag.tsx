import { TaxonomyType } from "@/data/types";
import Link from "next/link";
import React, { FC } from "react";
import { UrlObject } from 'url';

export interface TagProps {
  className?: string;
  tag: TaxonomyType;
  hideCount?: boolean;
}

const Tag: FC<TagProps> = ({ className = "", tag, hideCount = false }) => {
  let href = `tags/${tag.name}`
  const formattedHref: UrlObject = {
    pathname: href.startsWith('/') ? href : `/${href}`,
  };

  return (
    <Link
      className={`nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 ${className}`}
      href={formattedHref}
      >
      {`${tag.name}`}
      {!hideCount && (
        <span className="text-xs font-normal"> ({tag.count})</span>
      )}
    </Link>
  );
};

export default Tag;
