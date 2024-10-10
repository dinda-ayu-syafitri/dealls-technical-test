import { BaseLayout } from "@/components/layouts/baseLayout/baseLayout";
import { ArticleCategoryModul } from "@/modules/articleCategory/ArticleCategoryModul";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Article Category | Dealls Article Portal",
  description:
    "See all the article category in Dealls article portal, where you can find all the articles about jobs and career",
};

export default function ArticleCategoryPage() {
  return (
    <div className="w-full">
      <BaseLayout>
        <ArticleCategoryModul />
      </BaseLayout>
    </div>
  );
}
