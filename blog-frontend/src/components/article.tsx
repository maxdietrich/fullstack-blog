export interface ArticleData {
  headline: string;
  body: string;
}

interface ArticleProps {
  article: ArticleData;
}

export default function Article({ article }: ArticleProps) {
  return <article><h2 className="text-xl mb-1"><strong>{article.headline}</strong></h2><p>{article.body}</p></article>
}