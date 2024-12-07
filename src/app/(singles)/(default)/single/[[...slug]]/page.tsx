'use client';
import React from "react";
import NcImage from "@/components/NcImage/NcImage";
import SingleHeader from "@/app/(singles)/SingleHeader";
import { useGetArticleQuery } from "@/services/api/articles/ServiceArticles";

const PageSingle = ({ params  }: any) => {
  const { data, isLoading } = useGetArticleQuery(params.slug)
  const { featureImg } = data?.article || {};

   return (
    <>
      <div className={`nc-PageSingle pt-8 lg:pt-16`}>
        <header className="container rounded-xl">
          <div className="max-w-screen-md mx-auto">
            <SingleHeader article={data}/>
          </div>
        </header>

        {/* FEATURED IMAGE */}
        <NcImage
          alt="single"
          containerClassName="container my-10 sm:my-12"
          className="w-full rounded-xl"
          // src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg"
          src={featureImg}
          width={1260}
          height={750}
          sizes="(max-width: 1024px) 100vw, 1280px"
        />
      </div>
    </>
  );
};

export default PageSingle;
