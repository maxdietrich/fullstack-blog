import ArticleList from "@/components/article-list";

export default async function Home() {

  const response = await fetch('http://localhost:8080/articles', {
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const articles = await response.json() as Array<{ headline: string; body: string }>;

  return <div className="p-8"><h1 className="text-2xl mb-4">My Blog</h1><ArticleList articles={articles} /></div>;
}
