import { PostDataType } from "@/data/types";
import React, { FC } from "react";
import Badge from "@/components/Badge/Badge";

export interface CategoryBadgeListProps {
  className?: string;
  itemClass?: string;
  tags: PostDataType["categories"];
}

const CategoryBadgeList: FC<CategoryBadgeListProps> = ({
  className = "flex flex-wrap space-x-2",
  itemClass,
  tags,
}) => {
  return (
    <div
      className={`nc-CategoryBadgeList ${className}`}
      data-nc-id="CategoryBadgeList"
    >
      {tags?.map((item, index) => (
        <Badge
          className={itemClass}
          key={index}
          name={item.name}
          href={item.href}
          color={item.color as any}
        />
      ))}
    </div>
  );
};

export default CategoryBadgeList;
