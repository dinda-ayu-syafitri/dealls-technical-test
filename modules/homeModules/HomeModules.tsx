"use client";
import { ArticleCarousel } from "@/components/articleCarousel/ArticleCarousel";
import {
  useGetAllArticle,
  useGetArticleDetail,
  useGetCategory,
} from "@/hooks/articles/hooks";
import React from "react";

export const HomeModules = () => {
  const { data } = useGetAllArticle("", 1, 10, 1, "asc");
  const { data: category } = useGetCategory();
  const { data: articleDetail } = useGetArticleDetail("133");

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
          <p key={article.id}>{article.title}</p>
        ))}
      </div>
      <div>{/* <p>{articleDetail?.data.content}</p> */}</div>
    </div>
  );
};
