import { articles } from "@/app/data";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateMetadata({params}: {params: { id: string };}): Metadata {
  const article = articles.find(
    (element) => element.id === parseInt(params.id)
  );

  return {
    title: article?.title,
    description: article?.description,
  };
}

export default function page({ params }: { params: { id: string } }) {
  const article = articles.find(
    (element) => element.id === parseInt(params.id)
  );

  if(parseInt(params.id) > articles.length) {
    notFound();
  }
  return (
    <>
      {article && (
        <div className="p-5">
          <h2>
            {article.title} le {article.date} par {article.author}
          </h2>
          <p>{article.description}</p>

          
        </div>
      )}
    </>
  );
}
