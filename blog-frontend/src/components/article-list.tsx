import Article, { ArticleData } from "./article";

interface ArticleListProps {
  articles: ArticleData[];
}

export default function ArticleList({ articles }: ArticleListProps) {
  return (<div className="flex flex-col gap-8">{articles.map((article, index) => <Article article={article} key={`${index}_${article.headline}`} />)}</div>);
}