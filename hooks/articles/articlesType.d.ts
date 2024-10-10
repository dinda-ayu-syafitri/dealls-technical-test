export type TArticle = {
  id: string;
  slug: string;
  title: string;
};

export type TArticlesResponse = {
  code: number;
  data: {
    data: TArticle[];
    metadata: {
      page: number;
      limit: number;
      total_docs: number;
      total_pages: number;
      has_next_page: boolean;
    };
  };
};
