"use client";
import { ArticleCard } from "@/components/articleCard/ArticleCard";
import { ArticleCarousel } from "@/components/articleCarousel/ArticleCarousel";
import { ArticlesPerCategory } from "@/components/articlesPerCategory/ArticlesPerCategory";
import { CategoryList } from "@/components/categoryList/CategoryList";
import { useGetAllArticle, useGetCategory } from "@/hooks/articles/hooks";
import { Button, Tabs } from "flowbite-react";
import Link from "next/link";

export const HomeModules = () => {
  const { data } = useGetAllArticle("", 1, 10, 1, "asc");
  const { data: category } = useGetCategory();

  return (
    <div className="w-full h-full min-h-screen">
      <div className="grid grid-cols-4 gap-4 w-full">
        <div className="col-span-3  w-full h-auto">
          <ArticleCarousel />
          <div className="my-5">
            <Tabs aria-label="Pills" variant="pills">
              {category?.data.map((category) => (
                <Tabs.Item key={category.id} title={category.name}>
                  <ArticlesPerCategory category_id={category.id} />
                </Tabs.Item>
              ))}
            </Tabs>
          </div>
        </div>

        <div className="col-span-1 w-full h-auto">
          <CategoryList />
        </div>
      </div>
    </div>
  );
};
