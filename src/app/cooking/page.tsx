import { recipes } from "../data";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Cooking",
    description: "Welcome to my cooking web site",
  };
export default function cooking() {
  return (
    <div className="h-auto p-5">
      <h1 className=" text-4xl font-semibold text-center py-5 capitalize">explore recipe</h1>
      <div className="grid gap-2 grid-cols-3 p-55">
        {recipes.map((item) => {
          const link = `cooking/${item.id}`;
          return (
            <div className="bg-zinc-800 p-5 text-white font-bold max-w-sm rounded-2xl flex flex-col gap-2">
              <p>Discover {item.title}</p>
              <p>Made By {item.author}</p>

              <Link 
              className="bg-indigo-400 p-2 rounded text-zinc-800 hover:bg-indigo-700"
              href={link}>
              Go to Make !
              
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
