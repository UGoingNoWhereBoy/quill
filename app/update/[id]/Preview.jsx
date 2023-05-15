import Image from "next/image";
import React from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { ImPriceTag } from "react-icons/im";
import { RiUserAddFill } from "react-icons/ri";
import { TbArrowBigDownLines, TbArrowBigRightLines } from "react-icons/tb";

const Preview = ({ bookName, author, bookQty, bookPrice, bookImage }) => {
  return (
    <div className="md:flex block mb-14 ml-auto mr-auto">
      {" "}
      <div className="block rounded-lg p-4 border-2 border-t-violet-400 border-b-violet-400 border-r-violet-500 border-l-violet-600">
        <Image
          alt="book image"
          src={bookImage}
          className="h-56 w-full rounded-md object-cover"
          width={1280}
          height={720}
        />

        <div className="mt-2">
          <dl>
            <div>
              <dd className="text-sm text-gray-500"></dd>
            </div>

            <div>
              <dt className="sr-only">Book Name</dt>

              <dd className="font-medium text-lg">{bookName}</dd>
            </div>
          </dl>

          <div className="mt-6 flex items-center gap-14 text-sm flex-wrap">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <RiUserAddFill />

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Author</p>

                <p className="font-medium">{author}</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              {bookQty >= 10 ? (
                <BsArrowUp className="text-green-500" />
              ) : (
                <BsArrowDown className="text-red-500" />
              )}

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Quantity</p>

                <p className="font-medium">{bookQty}</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <ImPriceTag />

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Price</p>
                <p className="font-medium">${bookPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TbArrowBigRightLines className="mt-auto mb-auto text-5xl  animate-pulse text-emerald-500 md:block hidden ml-8" />
      <TbArrowBigDownLines className="mb-auto text-5xl ml-auto mr-auto animate-pulse text-emerald-500 md:hidden block mt-8" />
    </div>
  );
};

export default Preview;
