import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getAllArticles } from "./request";
import { TArticlesResponse } from "./articlesType";

export const useGetAllArticle = (
  search: string,
  category_id: number,
  limit: number,
  page: number,
  sort: string
): UseQueryResult<TArticlesResponse> =>
  useQuery({
    queryKey: ["get-all-articles", search, category_id, limit, page, sort],
    queryFn: async () =>
      await getAllArticles(search, category_id, limit, page, sort),
  });
