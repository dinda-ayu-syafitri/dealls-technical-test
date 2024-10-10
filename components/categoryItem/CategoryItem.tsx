import { useGetAllArticle } from "@/hooks/articles/hooks";
import Link from "next/link";
import React, { FC } from "react";

export const CategoryItem: FC<{
  category_id: number;
}> = ({ category_id }) => {
  const { data } = useGetAllArticle("", category_id, 5, 1, "asc");

  return (
    <div>
      {data?.data.data.map((article) => (
        <Link href={`article/${article.slug}/${article.id}`} key={article.id}>
          <div key={article.id} className="p-2 rounded-md border my-2">
            <p key={article.id}>{article.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
