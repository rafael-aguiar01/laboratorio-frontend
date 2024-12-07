"use client";

import React, { FC } from "react";
import CategoryBadgeList from "@/components/CategoryBadgeList/CategoryBadgeList";
import SingleTitle from "./SingleTitle";
import PostMeta2 from "@/components/PostMeta2/PostMeta2";
import SingleMetaAction2 from "./SingleMetaAction2";
import { DEMO_CATEGORIES } from "@/data/taxonomies";

export interface SingleHeaderProps {
  hiddenDesc?: boolean;
  titleMainClass?: string;
  className?: string;
  article?: any;
}

const SingleHeader: FC<SingleHeaderProps> = ({
  titleMainClass,
  hiddenDesc = false,
  className = "",
  article
}) => {

  const { title, excerpt } = article?.article || {};

  return (
    <>
      {article ? ( 
        <div className={`nc-SingleHeader ${className}`}>
          <div className="space-y-5">
            <CategoryBadgeList
              itemClass="!px-3"
              categories={[DEMO_CATEGORIES[1]]}
            />
            <SingleTitle
              mainClass={titleMainClass}
              title={title}
            />
            {!hiddenDesc && (
              <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
                <a>{excerpt}</a>
              </span>
            )}
            <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5 rtl:space-x-reverse">
              <PostMeta2
                size="large"
                className="leading-none flex-shrink-0"
                hiddenCategories
                avatarRounded="rounded-full shadow-inner"
              />
              <SingleMetaAction2 />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SingleHeader;