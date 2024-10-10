import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getAllArticles, getArticleDetail, getCategories } from "./request";
import {
  TArticleDetailResponse,
  TArticlesResponse,
  TCategoriesResponse,
} from "./articlesType";

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

export const useGetArticleDetail = (
  id: string
): UseQueryResult<TArticleDetailResponse> =>
  useQuery({
    queryKey: ["get-article-detail", id],
    queryFn: async () => await getArticleDetail(id),
  });

export const useGetCategory = (): UseQueryResult<TCategoriesResponse> =>
  useQuery({
    queryKey: ["get-all-category"],
    queryFn: async () => await getCategories(),
  });
