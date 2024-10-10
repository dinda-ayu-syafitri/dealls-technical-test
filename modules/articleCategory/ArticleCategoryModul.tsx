"use client";
import { ArticlesPerCategory } from "@/components/articlesPerCategory/ArticlesPerCategory";
import { useParams } from "next/navigation";
import React from "react";

export const ArticleCategoryModul = () => {
  const params = useParams();
  const { id, category } = params;

  const categoryId = Array.isArray(id) ? parseInt(id[0], 10) : parseInt(id, 10);

  return (
    <div className="w-full h-full">
      <h2 className="text-3xl font-bold my-5">{category}</h2>
      <hr />
      <ArticlesPerCategory category_id={categoryId} />
    </div>
  );
};
