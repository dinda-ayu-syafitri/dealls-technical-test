"use client";

import { useGetArticleDetail } from "@/hooks/articles/hooks";
import { useParams } from "next/navigation";
import React from "react";

export const ArticleDetailModul = () => {
  const params = useParams();
  const { id } = params;
  const { data: articleDetail } = useGetArticleDetail(id as string);

  return (
    <div>
      <p>{articleDetail?.data.title}</p>
    </div>
  );
};
