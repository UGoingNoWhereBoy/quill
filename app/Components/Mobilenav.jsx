"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FiHome } from "react-icons/fi";
import { BsBook } from "react-icons/bs";
import { RiAddFill } from "react-icons/ri";
import { signOut, useSession } from "next-auth/react";
import { Button } from "primereact/button";

const navigation = [
  { name: "Home", href: "/", icon: <FiHome /> },
  { name: "Books", href: "/books", icon: <BsBook /> },
  { name: "Add book", href: "/new", icon: <RiAddFill /> },
];

const Mobilenav = () => {
  const [isLoading, setLoading] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const { data: session, status } = useSession();
  const pathname = usePathname();
  useEffect(() => {
    setLoading(false);
  }, []);

  if (isLoading) {
    return (
      <button
        disabled
        className="block animate-pulse rounded bg-black dark:bg-white p-2.5 text-gray-600 transition dark:text-black md:hidden"
      >
        <span className="sr-only">Toggle menu</span>
        <HiMenuAlt4 />
      </button>
    );
  }

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
        focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setOpen(!isOpen)}
      >
        {isOpen ? (
          <AiOutlineClose className="text-xl ease-linear duration-150" />
        ) : (
          <HiMenuAlt4 className="text-xl ease-linear duration-150" />
        )}
      </button>
      {isOpen ? (
        <div
          className="fixed md:hidden top-0 right-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform  bg-white dark:bg-gray-900"
          aria-labelledby="drawer-navigation-label"
        >
          <div className="text-base font-semibold dark:text-gray-400 flex">
            {session ? <>Hello 👋 {session?.user?.name}</> : null}
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            data-drawer-hide="drawer-navigation"
            aria-controls="drawer-navigation"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              {navigation.map((item) => (
                <li>
                  {" "}
                  <Link
                    href={item.href}
                    className={
                      pathname === item.href
                        ? "flex items-center p-2 bg-gray-300 dark:bg-gray-700 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    }
                  >
                    {item.icon}
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}{" "}
            </ul>
            <div className="ml-2 mr-2 mt-8">
              {session ? (
                <Button
                  onClick={() => signOut()}
                  label="SignOut"
                  outlined
                  className="w-full"
                  severity="danger"
                ></Button>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Mobilenav;
