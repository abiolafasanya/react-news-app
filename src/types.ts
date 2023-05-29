export type Action = {
  onClick: () => void;
};

export interface Article {
  id: string;
  source: {
    id: string;
    name: string;
  } | string;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  image: string;
  publishedAt: string;
  published_date: string;
  content: string;
}

