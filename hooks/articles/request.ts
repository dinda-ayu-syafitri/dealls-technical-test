import { api } from "@/config/APIConfig";
import {
  TArticleDetailResponse,
  TArticlesResponse,
  TCategoriesResponse,
} from "./articlesType";

export const getAllArticles = async (
  search: string,
  category_id: number,
  limit: number,
  page: number,
  sort: string
): Promise<TArticlesResponse> => {
  const { data } = await api({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      search,
      category_id,
      limit,
      page,
      sort,
    },
    url: "/v1/articles",
  });
  return data;
};

export const getArticleDetail = async (
  id: string
): Promise<TArticleDetailResponse> => {
  const { data } = await api({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: "/v1/articles/" + id,
  });
  return data;
};

export const getCategories = async (): Promise<TCategoriesResponse> => {
  const { data } = await api({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: "/v1/categories",
  });
  return data;
};
