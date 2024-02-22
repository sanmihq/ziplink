"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Menu = {
  name: string;
  path: string;
};

export default function Header() {
  const pathname = usePathname();
  const menu: Menu[] = [
    { name: "Home", path: "/" },
    { name: "Analytics", path: "/analytics" },
    { name: "About", path: "/about" },
  ];
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-400 bg-white px-10 py-5">
      <span className="font-bold">Ziplink</span>
      <div className="hidden w-2/3 items-center justify-between md:flex">
        <ul className="flex items-center gap-5">
          {menu.map((item, index) => (
            <li
              key={index}
              className={`text-sm hover:font-medium ${pathname.startsWith(item.path) ? "font-semibold" : "font-regular"}`}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <Button size="sm" color="secondary">
            Try Now
          </Button>
          <Button size="sm" variant="bordered" color="secondary">
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
}
