import React from "react";
import { Carousel } from "flowbite-react";
import { useGetAllArticle } from "@/hooks/articles/hooks";

export const ArticleCarousel = () => {
  const { data } = useGetAllArticle("", 1, 5, 1, "desc");

  return (
    <div className="w-full h-56 sm:h-64 xl:h-80 2xl:h-96">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          {data?.data.data ? (
            data.data.data.map((article) => (
              <div
                key={article.id}
                className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
              >
                <h1 key={article.id} className="text-3xl font-bold">
                  {article.title}
                </h1>
              </div>
            ))
          ) : (
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              <p>Article Unavailable</p>
            </div>
          )}
        </Carousel>
      </div>
    </div>
  );
};
