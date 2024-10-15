import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl h-96 p-2"> Bienvenue sur mon site ! </h1>
      <Link href="/blog"> Acceder aux blog </Link>
    </>
  );
}
