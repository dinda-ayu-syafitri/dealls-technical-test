import { useGetArticleDetail } from "@/hooks/articles/hooks";
import { Badge, Button, Card } from "flowbite-react";
import Link from "next/link";
import React, { FC } from "react";
import { EmailShare, TwitterShare, WhatsappShare } from "react-share-kit";

export const ArticleCard: FC<{ id: string }> = ({ id }) => {
  const { data: articleDetail } = useGetArticleDetail(id as string);

  const url = "https://deall-technical-test.com";

  return (
    <div>
      {articleDetail?.data ? (
        <Card className="max-w-sm h-full">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {articleDetail.data.title}
          </h5>
          <div className="flex gap-2">
            {articleDetail.data.categories ? (
              articleDetail.data.categories.map((category) => (
                <Badge key={category.id} color="info">
                  {category.name}
                </Badge>
              ))
            ) : (
              <p>No Category</p>
            )}
          </div>

          <div className="">
            <Link
              href={`/article/${articleDetail.data.slug}/${articleDetail.data.id}`}
            >
              <Button>
                Read more
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Link>
            <div className="mt-3">
              <p className="text-sm">Share this article</p>

              <div className="flex gap-2">
                <WhatsappShare
                  url={`/article/${articleDetail.data.slug}/${articleDetail.data.id}`}
                  borderRadius={10}
                  size={25}
                />
                <TwitterShare
                  url={`/article/${articleDetail.data.slug}/${articleDetail.data.id}`}
                  borderRadius={10}
                  size={25}
                />
                <EmailShare
                  url={`/article/${articleDetail.data.slug}/${articleDetail.data.id}`}
                  borderRadius={10}
                  size={25}
                />
              </div>
            </div>
          </div>
        </Card>
      ) : (
        <p>Loading...</p> // Optional loading state
      )}
    </div>
  );
};
