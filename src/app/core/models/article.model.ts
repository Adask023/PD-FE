export interface ArticlePayload {
  title: string;
  tags: any[];
  links: any[];
  body: ArticleBody;
}

interface ArticleBody {
  title: string;
  body: string;
}

export interface ArticleGetPayload {
  message: Article[];
  offset: number;
  page: number;
  total_count: number;
}

export interface Article {
  title: string;
  tags: string[];
  links: string[];
  body: ArticleBody;
  create_date: string;
  author_id: string;
  _id: string;
}
