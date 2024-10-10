"use client";

import { CategoryList } from "@/components/categoryList/CategoryList";
import { useGetArticleDetail } from "@/hooks/articles/hooks";
import { DateFormatter } from "@/utils/dateFormatter";
import { useParams } from "next/navigation";
import React from "react";

export const ArticleDetailModul = () => {
  const params = useParams();
  const { id } = params;
  const { data: articleDetail } = useGetArticleDetail(id as string);

  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-4 gap-4 w-full">
        <div className="col-span-3 w-full h-full">
          {articleDetail?.data ? (
            <>
              <h1 className="text-xl md:text-3xl font-bold">
                {articleDetail.data.title}
              </h1>
              <DateFormatter dateString={articleDetail.data.created_at} />
              <div
                dangerouslySetInnerHTML={{
                  __html: articleDetail.data.content ?? "",
                }}
              />
            </>
          ) : (
            <h1>Article Not Found</h1>
          )}
        </div>
        <div className="col-span-1 w-full h-full">
          <CategoryList />
        </div>
      </div>
    </div>
  );
};
