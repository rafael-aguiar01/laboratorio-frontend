import React, { FC } from "react";
import Tag from "@/components/Tag/Tag";
import WidgetHeading1 from "@/components/WidgetHeading1/WidgetHeading1";
import { TaxonomyType } from "@/data/types";
import { DEMO_TAGS } from "@/data/taxonomies";

const tagsDemo = DEMO_TAGS.filter((_, i) => i < 9);

export interface WidgetTagsProps {
  className?: string;
  tags?: any;
}

const WidgetTags: FC<WidgetTagsProps> = ({
  className = "bg-neutral-100 dark:bg-neutral-800",
  tags
}) => {
  return (
    <div className={`nc-WidgetTags rounded-3xl overflow-hidden ${className}`}>
      <WidgetHeading1
        title="💡 Mais temas"
        viewAll={{ label: "Ver todas", href: "/#" }}
      />
      <div className="flex flex-wrap p-4 xl:p-5">
        {tags?.map((tag: any) => (
          <Tag className="mr-2 mb-2" key={tag.id} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;
