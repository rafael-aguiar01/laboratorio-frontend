'use client';
import React from "react";
import { useState, useEffect } from 'react';
import SectionMagazine10 from "@/components/Sections/SectionMagazine10";
import SectionMagazine9 from "@/components/Sections/SectionMagazine9";
import SectionAds from "@/components/Sections/SectionAds";
import SectionMagazine2 from "@/components/Sections/SectionMagazine2";
import SectionMagazine11 from "@/components/Sections/SectionMagazine11";
import SectionLatestPosts from "@/components/Sections/SectionLatestPosts";
import { DEMO_POSTS_NEWS } from "@/data/posts";
import sectionsData from './sections.json'
import { useGetArticlesQuery } from "@/services/api/articles/ServiceArticles";
import { distributeArticles } from "./distributeArticles";
import { PostDataType } from "@/data/types";
import { useGetStatsQuery } from "@/services/api/stats/ServiceStats";
import { useGetAuthorsQuery } from "@/services/api/users/ServiceUsers";

const MAGAZINE1_POSTS = DEMO_POSTS_NEWS.filter((_, i) => i >= 8 && i < 16);
const MAGAZINE9_POSTS = DEMO_POSTS_NEWS.filter((_, i) => i >= 6 && i < 18)
const MAGAZINE2_POSTS = DEMO_POSTS_NEWS.filter((_, i) => i >= 0 && i < 7);
const MAGAZINE11_POSTS = DEMO_POSTS_NEWS.filter((_, i) => i > 7 && i < 18)

const postsDemo1: PostDataType[] = DEMO_POSTS_NEWS.filter(
  (_, i) => i > 0 && i < 6
);
const postsDemo2: PostDataType[] = DEMO_POSTS_NEWS.filter(
  (_, i) => i > 5 && i < 11
);
const postsDemo3: PostDataType[] = DEMO_POSTS_NEWS.filter(
  (_, i) => i > 11 && i < 17
);

const PageHomeDemo6: React.FC = () => {
  const portalId = 3
  const { data: articles, isLoading } = useGetArticlesQuery(portalId)
  const { data: stats } = useGetStatsQuery(portalId)
  const { data: authors } = useGetAuthorsQuery(portalId)

  const sections = sectionsData.sections
  let tags
  let categories

  if (stats){
    categories = stats?.stats.categories
    tags = stats?.stats.tags?.map((tag: any) => ({
      ...tag,
      href: "archive/the-demo-archive-slug",
    }));
  }

  const tagHome = tags?.slice(0,9)
  const categoryHome = categories?.slice(0,6)
  const authorHome = authors?.authors.slice(0,5)
  const topArticles = articles?.articles.slice(0,4)

  if (isLoading) {
    return <div>Carregando...</div>; 
  }

  const distributedArticles = distributeArticles(articles || [], sections);

  return (
    <div className="nc-PageHomeDemo6 relative [ nc-section-rounded-md ]">
      <div className="relative overflow-hidden">
        
        <div className="container relative">
        <SectionAds className="pt-16 lg:pt-24" />

          {/* As 4 principais matérias do home */}
          <SectionMagazine10 
          posts={distributedArticles.section10} />

          <SectionMagazine9
          gapClassName="gap-6"
          className="pt-16 lg:pt-24"
          posts1={distributedArticles.section50}
          posts2={distributedArticles.section51}
          posts3={distributedArticles.section52}
      />

          <SectionAds className="pt-16 lg:pt-24" />

          <SectionMagazine11 
            className="py-16 lg:py-24" 
            posts1={distributedArticles.section53}
            posts2={distributedArticles.section54}
            posts3={distributedArticles.section55}
            />

          {/* <SectionMagazine2
            className="pt-16 lg:pt-24"
            heading=""
            posts={MAGAZINE1_POSTS}
          /> */}

          {/* === SECTION 11 === */}

        </div>

        {/* === SECTION 11 === */}
        <div className="dark bg-neutral-900 dark:bg-black dark:bg-opacity-20 text-neutral-100">
          <div className="relative container">
            <SectionLatestPosts
              heading="Latest Articles"
              className="py-16 lg:py-24"
              posts={distributedArticles.section11}
              // posts={MAGAZINE11_POSTS}
              postCardName="card4"
              gridClass="sm:grid-cols-2"
              tags={tagHome}
              categories={categoryHome}
              authors={authorHome}
              topArticles={topArticles}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHomeDemo6;
