import Link from "next/link";
import React, { FC } from "react";

export const ArticleThumbnailCard: FC<{ article_id: number; slug: string }> = ({
  article_id,
  slug,
}) => {
  return (
    <Link href={`/${slug}/${article_id}`}>
      <div>
        <p>{article_id}</p>
      </div>
    </Link>
  );
};
