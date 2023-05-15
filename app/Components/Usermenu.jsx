"use client";

import Link from "next/link";
import { IoIosLogOut } from "react-icons/io";
import { signOut } from "next-auth/react";

const Usermenu = ({ sessionData }) => {
  return (
    <>
      {!sessionData ? (
        <Link href={"/api/auth/signin"}>Sign in</Link>
      ) : (
        <div className="flex mr-3 text-sm  dark:bg-gray-800 bg-slate-300 rounded-full md:mr-0  focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
          <img
            className="w-10 h-10 rounded-full"
            src={sessionData?.user?.image}
            alt="user Avatar"
          />
          <div className="hidden sm:flex mt-auto mb-auto p-2 font-sans">
            {sessionData.user.name}
            <IoIosLogOut
              className="text-xl text-red-500 ml-2 cursor-pointer hover:scale-125 hover:text-red-700 ease-linear duration-150"
              onClick={() => signOut()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Usermenu;
