import Card15Podcast from "@/components/Card15Podcast/Card15Podcast";
import Card9 from "@/components/Card9/Card9";
import Heading from "@/components/Heading/Heading";
import { DEMO_POSTS_AUDIO } from "@/data/posts";
import { PostDataType } from "@/data/types";
import React, { FC } from "react";

const postsDemo: PostDataType[] = DEMO_POSTS_AUDIO.filter(
  (_, i) => i > 0 && i < 10
);

export interface SectionMagazine9Props {
  posts1?: PostDataType[]; 
  posts2?: PostDataType[]; 
  posts3?: PostDataType[];
  className?: string;
  gapClassName?: string;
  heading?: string;
}

const SectionMagazine9: FC<SectionMagazine9Props> = ({
  posts1 = [],
  posts2 = [],
  posts3 = [],
  className = "",
  gapClassName = "gap-6 md:gap-8",
  heading = "Listen to audio live",
}) => {
  return (
    <div className={`nc-SectionMagazine9 relative ${className}`}>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${gapClassName}`}
      >
        {posts1[0] && <Card9 ratio="aspect-w-4 aspect-h-3" post={posts1[0]} />}
        {posts2[0] && <Card9 ratio="aspect-w-4 aspect-h-3" post={posts2[0]} />}
        {posts3[0] && <Card9 ratio="aspect-w-4 aspect-h-3" post={posts3[0]} />}
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${gapClassName} mt-8`}
      >
        {/* Assumindo que posts1, posts2 e posts3 terão os elementos do índice 0, 1 e 2,
            e que os elementos a partir do índice 3 estarão no array posts3 */}

        {/* Coluna 1 */}
        {posts1.filter((_, i) => i > 0).map((p, index) => (
            <Card15Podcast key={`col1-${index}`} post={p} />
        ))}

        {/* Coluna 2 */}
        {posts2.filter((_, i) => i > 0).map((p, index) => (
            <Card15Podcast key={`col2-${index}`} post={p} />
        ))}

        {/* Coluna 3 - elementos a partir do índice 3 do array original, 
            assumindo que os índices 0, 1 e 2 foram usados nas colunas anteriores */}
        {posts3.filter((_, i) => i > 0).map((p, index) => (
            <Card15Podcast key={`col3-${index}`} post={p} />
        ))}
      </div>
    </div>
  );
};

export default SectionMagazine9;