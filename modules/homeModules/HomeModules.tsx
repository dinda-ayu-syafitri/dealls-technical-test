"use client";
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
          <div>
            {data?.data.data.map((article) => (
              <div key={article.id}>
                <p key={article.id}>{article.title}</p>
                <Link href={`article/${article.slug}/${article.id}`}>
                  <Button> {article.slug}</Button>
                </Link>
              </div>
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
