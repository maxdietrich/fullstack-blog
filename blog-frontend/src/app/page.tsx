import ArticleList from "@/components/article-list";
import Link from "next/link";

export default async function Home() {

  const response = await fetch('http://localhost:8080/articles', {
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const articles = await response.json() as Array<{ headline: string; body: string }>;

  return <>
  <ArticleList articles={articles} />
  <div className="mt-16">
    <Link href="/new"><span className="text-sky-400 underline">Write new article</span></Link>
  </div>
  </>;
}
