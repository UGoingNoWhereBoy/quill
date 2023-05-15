import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Quill, Books management system.
              </h2>

              <div className="mt-4 md:mt-8">
                <Link
                  href="/books"
                  className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  View Books
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <Image
              alt="booksimg1"
              src="https://th.bing.com/th/id/OIG.XyNQK7CU50UfzCxjdd1Y?pid=ImgGn"
              className="h-40 w-full object-cover sm:h-56 md:h-full"
              width={1280}
              height={800}
            />

            <Image
              alt="booksimg2"
              src="https://th.bing.com/th/id/OIG.gNSKFapH7Ybwa8ulMb1T?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
              className="h-40 w-full object-cover sm:h-56 md:h-full"
              width={1280}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
