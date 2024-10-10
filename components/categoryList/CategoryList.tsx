import { TCategory } from "@/hooks/articles/articlesType";
import { useGetCategory } from "@/hooks/articles/hooks";
import { CategoryItem } from "../categoryItem/CategoryItem";
import Link from "next/link";

export const CategoryList = () => {
  const { data: categories } = useGetCategory();

  return (
    <div className="p-5 border rounded-lg">
      {categories?.data.map((category: TCategory) => (
        <div key={category.id} className="p-3 border-b">
          <h3 className="text-lg font-bold">{category.name}</h3>
          <CategoryItem category_id={category.id} key={category.id} />
          <Link href={`article/categories/${category.name}/${category.id}`}>
            <span className="text-sm">See More</span>
          </Link>
        </div>
      ))}
    </div>
  );
};
