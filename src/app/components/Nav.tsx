"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

const NavLink = [
  { name: "contact", href: "/contact" },
  { name: "blog", href: "/blog" },
  { name: "about", href: "/about" },
  { name: "cooking", href: "/cooking" },
];

function Nav() {

    const pathname = usePathname();
  return (
    <div>
      <ul
      className="text-white font-semibold font-mono flex  flex-row gap-4 justify-center"
      >
        {NavLink.map((link) => {
            const isActive =  pathname.startsWith(link.href);

          return (
            <li key={link.name}>
              <Link 
              className={isActive ? "bg-lime-800 rounded-xl p-2 min-w-4": "text-zinc-500"}
              href={link.href}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Nav;
