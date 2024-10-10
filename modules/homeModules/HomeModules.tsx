"use client";
import { ArticleCard } from "@/components/articleCard/ArticleCard";
import { ArticleCarousel } from "@/components/articleCarousel/ArticleCarousel";
import { CategoryList } from "@/components/categoryList/CategoryList";
import { useGetAllArticle, useGetCategory } from "@/hooks/articles/hooks";
import { Button } from "flowbite-react";
import Link from "next/link";

export const HomeModules = () => {
  const { data } = useGetAllArticle("", 1, 10, 1, "asc");
  const { data: category } = useGetCategory();

  return (
    <div className="w-full h-full min-h-screen">
      <div className="grid grid-cols-4 gap-4 w-full">
        <div className="col-span-3  w-full h-auto">
          <ArticleCarousel />
          <div className="grid grid-cols-3 gap-5 my-5">
            {data?.data.data.map((article) => (
              <ArticleCard key={article.id} id={article.id} />
            ))}
          </div>
        </div>

        <div className="col-span-1 w-full h-auto">
          <CategoryList />
        </div>
      </div>
    </div>
  );
};
