"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Books", href: "/books" },
  { name: "Add book", href: "/new" },
];

const Navlinks = () => {
  const pathname = usePathname();
  return (
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
      <ul
        className={
          "flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        }
      >
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={
              pathname === item.href
                ? "dark:text-white text-slate-700 dark:bg-slate-800 bg-slate-200 px-4 py-2 rounded-md"
                : "px-4 py-2 dark:text-gray-300 text-black  hover:dark:bg-gray-700 hover:bg-gray-300 rounded-md ease-linear duration-150 "
            }
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navlinks;
