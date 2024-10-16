export type TArticle = {
  id: string;
  slug: string;
  title: string;
};

export type TCategory = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
};

export type TArticleDetail = {
  id: string;
  title: string;
  slug: string;
  content: string;
  created_at: string;
  updated_at: string;
  categories: [TCategory];
};

export type TCategoriesResponse = {
  code: number;
  data: [TCategory];
};

export type TArticlesResponse = {
  code: number;
  data: {
    data: [TArticle];
    metadata: {
      page: number;
      limit: number;
      total_docs: number;
      total_pages: number;
      has_next_page: boolean;
    };
  };
};

export type TArticleDetailResponse = {
  code: number;
  data: TArticleDetail;
};
