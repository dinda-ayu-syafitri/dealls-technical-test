"use client";
import { ArticleCarousel } from "@/components/articleCarousel/ArticleCarousel";
import { useGetAllArticle, useGetCategory } from "@/hooks/articles/hooks";
import { Button } from "flowbite-react";
import Link from "next/link";

export const HomeModules = () => {
  const { data } = useGetAllArticle("", 1, 10, 1, "asc");
  const { data: category } = useGetCategory();

  return (
    <div className="px-20 w-full h-full min-h-screen bg-red-300">
      <div className="grid grid-cols-4 gap-4 w-full">
        <div className="col-span-3 bg-slate-400 w-full h-auto">
          <ArticleCarousel />
        </div>

        <div className="col-span-1 bg-red-400 w-full h-auto">
          <p>Category Section</p>
          <div>
            {category?.data.map((cat) => (
              <div key={cat.id}>
                <p>{cat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

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
      <div>{/* <p>{articleDetail?.data.content}</p> */}</div>
    </div>
  );
};
