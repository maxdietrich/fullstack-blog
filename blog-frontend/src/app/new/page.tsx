import Link from "next/link";
import NewArticleForm from "./new-article-form";

export default function NewArticlePage() {
  return <>
    <NewArticleForm />
    <div className="mt-16">
      <Link href="/"><span className="text-sky-400 underline">Back to article list</span></Link>
    </div>
  </>;
}