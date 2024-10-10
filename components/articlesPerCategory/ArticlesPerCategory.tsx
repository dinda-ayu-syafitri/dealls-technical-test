import { useGetAllArticle } from "@/hooks/articles/hooks";
import React, { FC, useEffect, useState } from "react";
import { ArticleCard } from "../articleCard/ArticleCard";
import { Pagination } from "flowbite-react";

export const ArticlesPerCategory: FC<{ category_id: number }> = ({
  category_id,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, refetch } = useGetAllArticle(
    "",
    category_id,
    6,
    currentPage,
    "asc"
  );

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    refetch();
  }, [currentPage, category_id, refetch]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-2 md:my-5">
        {data?.data.data ? (
          data.data.data.map((article) => (
            <ArticleCard key={article.id} id={article.id} />
          ))
        ) : (
          <div>
            <p>No Article Available</p>
          </div>
        )}
      </div>
      <Pagination
        currentPage={data ? data?.data.metadata.page : 1}
        totalPages={data ? data?.data.metadata.total_pages : 1}
        onPageChange={onPageChange}
      />
    </div>
  );
};
