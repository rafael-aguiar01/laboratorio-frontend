import Badge from "@/components/Badge/Badge";
import Card18 from "@/components/Card18/Card18";
import Heading from "@/components/Heading/Heading";
import { DEMO_CATEGORIES } from "@/data/taxonomies";
import { PostDataType, TaxonomyType, TwMainColor } from "@/data/types";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React, { FC } from "react";

export interface SectionMagazine11Props {
  posts1?: PostDataType[];
  posts2?: PostDataType[];
  posts3?: PostDataType[];
  className?: string;
  categories?: TaxonomyType[];
}

const SectionMagazine11: FC<SectionMagazine11Props> = ({
  posts1 = [],
  posts2 = [],
  posts3 = [],
  className = "",
  categories = [DEMO_CATEGORIES[0], DEMO_CATEGORIES[7], DEMO_CATEGORIES[4]],
}) => {
  const renderListByCat = (
    category: TaxonomyType,
    listPosts: PostDataType[]
  ) => {
    return (
      <div key={category.id} className={`flex flex-col space-y-4`}>
        <div className="flex items-center justify-between">
          <Badge
            className="uppercase tracking-wide rounded-none px-4 py-1.5"
            name={category.name}
            color={category.color as TwMainColor}
          />
          <a href="##" className="flex items-center text-xs text-neutral-500">
            <span>More Articles</span>
            <ArrowRightIcon className="ms-1.5 w-3 h-3" />
          </a>
        </div>
        {listPosts.length > 0 && (
          <Card18
            ratio="aspect-w-4 aspect-h-3"
            className="flex-shrink-0"
            post={listPosts[0]}
          />
        )}
        <ul className="space-y-3">
          {listPosts
            .slice(1) // Ignora o primeiro post, já exibido no Card18
            .map((post) => (
              <li key={post.id}>
                <h2 className="nc-card-title flex items-start font-medium space-x-4 rtl:space-x-reverse">
                  <Badge
                    className="w-2.5 h-2.5 !p-0 rounded flex-shrink-0 mt-2"
                    name={""}
                    color={category.color as TwMainColor}
                  />
                  <a href={post.href} title={post.title} className="flex">
                    {post.title}
                  </a>
                </h2>
              </li>
            ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={`nc-SectionMagazine11 relative ${className}`}>
      {/* <Heading desc={"Click on music icon and enjoy music or podcast"}>
        Listen to audio live
      </Heading> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-4 md:gap-7">
        {renderListByCat(categories[0], posts1)}
        {renderListByCat(categories[1], posts2)}
        {renderListByCat(categories[2], posts3)}
      </div>
    </div>
  );
};

export default SectionMagazine11;
