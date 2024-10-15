import Link from "next/link";
import { articles } from "../data";
import { Article } from "../types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ETUVE-BLOG",
  description: "Bienvenue sur mon blog!",
};

export default function BlogPage() {
  return (
    <>
      {articles.map((article) => {
        const link = `blog/${article.id}`;
        return (
          <div key={article.id} className="p-2 h-auto ">
            <h2>
              {article.title} le {article.date} par {article.author}
            </h2>
            <Link href={link} className=" text-lime-500 p-2 font-bold ">
              Accedera a l'article{" "}
            </Link>
          </div>
        );
      })}
    </>
  );
}
