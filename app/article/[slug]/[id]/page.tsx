import { BaseLayout } from "@/components/layouts/baseLayout/baseLayout";
import { ArticleDetailModul } from "@/modules/articleDetailModul/ArticleDetailModul";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Article | Dealls Article Portal",
  description:
    "Dealls article portal, where you can find all the articles about jobs and career",
};

export default function ArticleDetailPage() {
  return (
    <div className="w-full">
      <BaseLayout>
        <ArticleDetailModul />
      </BaseLayout>
    </div>
  );
}
