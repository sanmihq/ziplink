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
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white bg-opacity-70 px-10 py-5 backdrop-blur-md">
      <span className="font-bold">Ziplink</span>
      <div className="flex w-2/3 items-center justify-between">
        <ul className="flex items-center gap-5">
          {menu.map((item, index) => (
            <li
              key={index}
              className={`text-sm hover:font-bold ${pathname.startsWith(item.path) ? "font-bold" : "font-regular"}`}
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
