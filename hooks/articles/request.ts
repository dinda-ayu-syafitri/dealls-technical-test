import { api } from "@/config/APIConfig";
import { TArticlesResponse } from "./articlesType";

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
