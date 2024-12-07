'use client';
import React from "react";
import NcImage from "@/components/NcImage/NcImage";
import SingleHeader from "@/app/(singles)/SingleHeader";
import { useGetArticleQuery } from "@/services/api/articles/ServiceArticles";
import SingleContent from "@/app/(singles)/SingleContent";

const PageSingle = ({ params  }: any) => {
  const { data, isLoading } = useGetArticleQuery(params.slug)
  const { featureImg, content } = data?.article || {};
   return (
    <>
      <div className={`nc-PageSingle pt-8 lg:pt-16`}>
        <header className="container rounded-xl">
          <div className="max-w-screen-md mx-auto">
            <SingleHeader article={data}/>
          </div>
        </header>

        <NcImage
          alt="single"
          containerClassName="container my-10 sm:my-12"
          className="w-full rounded-xl"
          src={featureImg}
          width={1260}
          height={750}
          sizes="(max-width: 1024px) 100vw, 1280px"
        />
        <SingleContent article={data}/>
      </div>
    </>
  );
};

export default PageSingle;
