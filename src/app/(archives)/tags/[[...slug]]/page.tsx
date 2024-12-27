'use client';

import React from "react";
import ModalCategories from "../../ModalCategories";
import ModalTags from "../../ModalTags";
import { DEMO_CATEGORIES, DEMO_TAGS } from "@/data/taxonomies";
import { DEMO_AUTHORS } from "@/data/authors";
import Pagination from "@/components/Pagination/Pagination";
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import ArchiveFilterListBox from "@/components/ArchiveFilterListBox/ArchiveFilterListBox";
import SectionSubscribe2 from "@/components/SectionSubscribe2/SectionSubscribe2";
import Card11 from "@/components/Card11/Card11";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionGridCategoryBox from "@/components/SectionGridCategoryBox/SectionGridCategoryBox";
import ButtonSecondary from "@/components/Button/ButtonSecondary";
import SectionSliderNewAuthors from "@/components/SectionSliderNewAthors/SectionSliderNewAuthors";
import { useGetTagArticlesQuery } from "@/services/api/articles/ServiceArticles";
import Card18 from "@/components/Card18/Card18";
import { useGetStatsQuery } from "@/services/api/stats/ServiceStats";

//const PageArchive = ({ params }: { params: { tag: string } }) => {
const PageArchive = ({ params }: any) => {
  const portalId = 3;
  const tag = params.slug
  console.log(tag)
  const { data: apiResponse, isLoading } = useGetTagArticlesQuery({ portalId, tag });
  const { data: stats } = useGetStatsQuery(portalId)
  console.log(apiResponse)
  let categories
  let tags
  if (stats){
    categories = stats?.stats.categories
    tags = stats?.stats.tags?.map((tag: any) => ({
      ...tag,
      href: "archive/the-demo-archive-slug",
    }));
  }

  const posts = apiResponse?.articles?.map((article: any) => ({
    id: article.id,
    title: article.title,
    href: `/single/${article.slug}`,
    excerpt: article.excerpt,
    featuredImage: article.featureImg,
    slug: article.slug,
    postType: "standard",
    author: {
      name: article.user.name,
      avatar: article.user.avatar,
    },
    category: {
      name: '',
      color: '',
    },
    createdAt: article.created_at,
  })) || [];

  const FILTERS = [{ name: "Mais Recentes" }];

  return (
    <div className={`nc-PageArchive`}>
      <div className="container pt-10 pb-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        <div>
          <div className="flex flex-col sm:justify-between sm:flex-row">
            <div className="flex space-x-2.5 rtl:space-x-reverse">
              {/* <ModalCategories categories={DEMO_CATEGORIES} />
              <ModalTags tags={DEMO_TAGS} /> */}
              {categories && tags ? (
                  <>
                    <ModalCategories categories={categories} />
                    <ModalTags tags={tags} />
                  </>
                ) : (
                  <p>Carregando categorias e tags...</p>
                )}
            </div>
            <div className="block my-4 border-b w-full border-neutral-300 dark:border-neutral-500 sm:hidden"></div>
            <div className="flex justify-end">
              <ArchiveFilterListBox lists={FILTERS} />
            </div>
          </div>

          {/* LOOP ITEMS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              posts.map((post: any) => <Card11 key={post.id} post={post} />)
            )}
          </div>

          {/* PAGINATIONS */}
          {/* <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pagination />
            <ButtonPrimary>Show me more</ButtonPrimary>
          </div> */}
        </div>

        {/* MORE SECTIONS */}
        {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionGridCategoryBox categories={DEMO_CATEGORIES.filter((_, i) => i < 10)} />
          <div className="text-center mx-auto mt-10 md:mt-16">
            <ButtonSecondary loading>Show me more</ButtonSecondary>
          </div>
        </div> */}

        {/* <SectionSliderNewAuthors
          heading="Top elite authors"
          subHeading="Discover our elite writers"
          authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
        /> */}

        {/* <SectionSubscribe2 /> */}
      </div>
    </div>
  );
};

export default PageArchive;
